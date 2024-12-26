"use strict";

const { completeOrderEmail } = require("../../../services/mailsForm");
const { validateOrCreateUser } = require("../../auth/services/services");
const { generateListPdfTickets } = require("../../../services/pdf");
const {
  getUniqueObjects,
  reduceElements,
} = require("../../../services/general");
const { validateEmail, mailOrderCreated } = require("../../../services/mails");
const { encrypt } = require("../../../services/crypto");

const {
  findOneEventTicketTypes,
  updateTicketTypes,
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

const onOrderEventTickets = async (idOrder) => {
  return new Promise(async (resolve, reject) => {
    const order = await findOneOrder({ id_order: idOrder });
    if (!order?.id) {
      return reject({
        status: false,
        data: null,
        message: "Order not found",
      });
    }

    if (!order.stripe_id) {
      return reject({
        status: false,
        data: null,
        message: "Order not found",
      });
    }

    const paymentInte = await retrievePaymentIntents(order.stripe_id);
    if (!paymentInte?.status?.includes("succe")) {
      return reject({
        status: false,
        data: null,
        message: "Payment not found",
      });
    }

    const tickets = await findManyTicket({ order_id: order.id });

    const events = await findOneEvent({ id: order.event_id.id });

    resolve({ ...order, tickets, events });
  });
};

module.exports = createCoreService("api::order.order", ({ strapi }) => ({
  // GET
  async getDowloandOrder(ctx) {
    try {
      const { params } = ctx;
      const resData = await onOrderEventTickets(params.id);
      const pdf = await generateListPdfTickets(resData);
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
  async getForwardMailOrder(ctx) {
    try {
      const { params } = ctx;
      const resData = await onOrderEventTickets(params.id);
      const pdf = await generateListPdfTickets(resData);

      const ticketsRedc = reduceElements(
        resData.tickets.map((ticket) => ({
          ...ticket.ticket_type_id,
          amount: 1,
        })),
        { elemen: "id" }
      );

      const html = completeOrderEmail({ ...resData, ticketsRedc });

      await mailOrderCreated({
        html: html,
        pdf: pdf,
        email: resData.user_id.email,
        eventName: resData.event_id.event_name,
      });

      return {
        data: resData,
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

        if (discountCode && discountCode.id && !discountCode.disable) {
          reqData.discount_code_id = discountCode.id;
          updateDiscountCode(
            { id: discountCode.id },
            { amount: (discountCode?.amount || 0) + 1 }
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

      Promise.all(
        body?.tickets.map((ticket) => {
          findOneEventTicketTypes({ id: ticket.id }).then((res) => {
            if (res?.id) {
              updateTicketTypes(
                { id: res.id },
                { max_capacity: res.max_capacity - ticket.quantity }
              );
            }
          });
        })
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
  async postCreateFreeOrder(ctx) {
    try {
      const { body, user } = ctx;

      const event = await findOneEvent({ id_event: body.eventId });
      if (!event?.id) {
        return {
          status: false,
          data: null,
          message: "Event not found",
        };
      }

      if (event.organizer_id.id != user.id) {
        return {
          status: false,
          data: null,
          message: "You are not the owner of the event",
        };
      }

      const userRes = await validateOrCreateUser({
        username: body.email,
        email: body.email,
        confirmed: true,
        lastname: body.lastName,
        firstname: body.firstName,
        phone: body.phone,
      });

      let reqData = {
        total_price: 0,
        price: body.values,
        smsEmail: true,
        event_id: event.id,
        user_id: userRes.id,
        status_order_id: 1,
      };

      const order = await createOrder(reqData);
      const orderEncrypted = encrypt(`order_${order.id}`);
      updateOrder({ id: order.id }, { id_order: orderEncrypted });

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
