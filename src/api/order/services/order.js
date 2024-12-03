"use strict";

const { validateOrCreateUser } = require("../../auth/services/services");

const { generateListPdfTickets } = require("../../../services/pdf");
const { getUniqueObjects } = require("../../../services/general");
const { validateEmail } = require("../../../services/mails");
const { encrypt } = require("../../../services/crypto");

const {
  findOneEventTicketTypes,
} = require("../../ticket-type/services/services");
const {
  createTicket,
  updateTicket,
  findManyTicket,
} = require("../../ticket/services/services");
const { findOneEvent } = require("../../event/services/services");
const {
  findOneDiscountCode,
  updateDiscountCode,
} = require("../../discount-code/services/services");

const { createOrder, updateOrder, findOneOrder } = require("./services");

const {
  createPaymentMethod,
  createPaymentIntents,
  updatePaymentIntents,
  retrievePaymentIntents,
} = require("../../../services/stripe");

/**
 * event-categorie service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::order.order", ({ strapi }) => ({
  // GET
  async getDowloandOrder(ctx) {
    try {
      const { params } = ctx;
      const order = await findOneOrder({ id_order: params.id });
      if (!order?.id) {
        return {
          status: false,
          data: null,
          message: "Order not found",
        };
      }

      const paymentInte = await retrievePaymentIntents(order.stripe_id);
      if (!paymentInte?.status?.includes("succe")) {
        return {
          status: false,
          data: null,
          message: "Payment not found",
        };
      }

      const tickets = await findManyTicket({ order_id: order.id });
      const events = await findOneEvent({ id: order.event_id.id });

      const pdf = await generateListPdfTickets({ ...order, tickets, events });

      return {
        data: pdf,
        message: "",
        status: true,
      };
    } catch (error) {
      console.log(error);
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the order",
      };
    }
  },
  // POST
  async postCreatePayment(ctx) {
    try {
      const { body } = ctx;

      const emailVal = await validateEmail(body.email);
      if (!emailVal.status || emailVal.data != "Valid") {
        return {
          status: false,
          data: null,
          message: "Verify your email not valid",
        };
      }

      const event = await findOneEvent({ id_event: body.eventId });
      if (!event?.id) {
        return {
          status: false,
          data: null,
          message: "Event not found",
        };
      }

      let listTickets = await Promise.all(
        body?.tickets?.map(async (ticket) => {
          return await findOneEventTicketTypes({
            id: ticket.id,
            max_capacity: {
              $gt: 0,
              $gte: ticket.quantity,
            },
          });
        })
      );

      listTickets = listTickets.filter((ticket) => ticket?.id);

      if (listTickets.length != body?.tickets?.length) {
        return {
          status: false,
          data: null,
          message: `${getUniqueObjects(listTickets, body.tickets, "id")
            .map((obj) => obj.name)
            .join(", ")} ticket sold out`,
        };
      }

      let paymentMethod = body?.payment;
      if (body?.type == "card") {
        const res = await createPaymentMethod(body?.payment || "");
        paymentMethod = res.id;
      }

      let metadata = {
        name: `${body.firstName} ${body.lastName}`,
        email: body.email,
        phone: body.phone,
        eventName: event?.event_name,
        id_event: body?.eventId,
        price: JSON.stringify(body.values),
        basePrice: body.values.subTotal,
      };
      let paymentRequest = {
        amount: body.values.total,
        data: metadata,
        payment: paymentMethod,
      };

      const paymentIntents = await createPaymentIntents(paymentRequest);

      return {
        status: true,
        data: {
          id: paymentIntents.id,
          client_secret: paymentIntents.client_secret,
        },
        message: "Order created successfully",
      };
    } catch (error) {
      return {
        status: false,
        data: error?.payment_intent?.client_secret || null,
        message: "An error occurred while fetching the order",
      };
    }
  },
  async postCreateOrder(ctx) {
    try {
      const { body } = ctx;

      const event = await findOneEvent({ id_event: body.eventId });
      if (!event?.id) {
        return {
          status: false,
          data: null,
          message: "Event not found",
        };
      }

      const validOrder = await findOneOrder({
        stripe_id: body.payment.id,
      });

      if (validOrder?.id) {
        return {
          status: false,
          data: null,
          message: "The order has been paid",
        };
      }

      const user = await validateOrCreateUser({
        username: body.email,
        email: body.email,
        confirmed: true,
        lastname: body.lastName,
        firstname: body.firstName,
        phone: body.phone,
      });

      let reqData = {
        stripe_id: body.payment.id,
        total_price: body.values.total,
        price: body.values,
        smsEmail: body.smsCheck,
        event_id: event.id,
        user_id: user.id,
        status_order_id: 1,
      };

      if (body?.codeDiscount) {
        const discountCode = await findOneDiscountCode({
          name: body.codeDiscount,
          event_id: event.id,
        });

        if (discountCode && discountCode.id) {
          reqData.discount_code_id = discountCode.id;
          updateDiscountCode(
            { id: discountCode.id },
            { amount: discountCode.amount - 1 }
          );
        }
      }

      const order = await createOrder(reqData);
      const orderEncrypted = encrypt(`order_${order.id}`);

      updateOrder({ id: order.id }, { id_order: orderEncrypted });

      updatePaymentIntents(body.payment.id, {
        metadata: { orderId: orderEncrypted },
      });

      const ticketPromises = await Promise.all(
        body?.tickets
          .map((ticket) => {
            return Array(ticket.quantity)
              .fill(null)
              .map(
                async () =>
                  await createTicket({
                    ticket_type_id: ticket.id,
                    order_id: order.id,
                    event_id: event.id,
                  })
              );
          })
          .flat()
      );

      ticketPromises.forEach((ticket) => {
        updateTicket(
          { id: ticket.id },
          { id_ticket: encrypt(`ticket_${ticket.id}`) }
        );
      });

      return {
        status: true,
        data: orderEncrypted,
        message: "Order created successfully",
      };
    } catch (error) {
      console.log(error);
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the order",
      };
    }
  },
}));
