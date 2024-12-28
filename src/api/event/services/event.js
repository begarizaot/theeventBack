"use strict";

const moment = require("moment");
const { deletePreviousImage } = require("../../../services/cloudinary");
const { encrypt } = require("../../../services/crypto");
const { reduceElements } = require("../../../services/general");

const {
  findManyTicket,
  findOneTicket,
  updateTicket,
} = require("../../ticket/services/services");
const {
  findPageOrder,
  findOneOrder,
} = require("../../order/services/services");
const { validateOrCreateMap } = require("../../map/services/services");
const {
  findManyTeamAccess,
  findOneTeamAccess,
} = require("../../team-access/services/services");
const {
  findPageDiscountCode,
} = require("../../discount-code/services/services");
const {
  findPageEvent,
  findOneEvent,
  updateEvent,
  createEvent,
} = require("./services");
const {
  findManyTicketTypes,
  createManyTicketTypes,
  updateTicketTypes,
} = require("../../ticket-type/services/services");

/**
 * discount service
 */

const formatDataEvent = async (event) => {
  // Obtener tipos de tickets
  const ticketTypes = await findManyTicketTypes({
    event_id: event.id,
  });

  // Calcular valores mínimo y máximo
  const { minValue, maxValue } = minMaxValues(ticketTypes);
  event.minValue = minValue;
  event.maxValue = maxValue;

  return {
    ...event,
    ticketType: ticketTypes,
  };
};

const minMaxValues = (validTickets) => {
  const prices = validTickets.map((ticket) => ticket.price);
  const minValue = prices.length > 0 ? Math.min(...prices) : 0;
  const maxValue = prices.length > 0 ? Math.max(...prices) : 0;
  return {
    minValue,
    maxValue: maxValue === minValue ? 0 : maxValue,
  };
};

async function deleteImage(imageId) {
  const filesData = await strapi.db.query("plugin::upload.file").delete({
    where: { id: imageId },
  });
  deletePreviousImage(filesData.provider_metadata.public_id);
}

const { createCoreService } = require("@strapi/strapi").factories;

const apiEvent = "api::event.event";
module.exports = createCoreService(apiEvent, ({ strapi }) => ({
  // GETS
  async getEventList(ctx) {
    try {
      const { query } = ctx;
      const { page, size } = query;

      const events = await findPageEvent(null, {
        page,
        pageSize: size,
      });

      const results = await Promise.all(
        events.results.map(async (event) => {
          const formattedEvent = await formatDataEvent(event);
          return { ...event, ...formattedEvent };
        })
      );

      return {
        data: results,
        pagination: events.pagination,
        message: "",
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the events",
      };
    }
  },
  async getEventSearch(ctx) {
    try {
      const { query } = ctx;
      const { eventName } = query;

      const events = await findPageEvent(
        {
          event_name: { $containsi: eventName || "" },
        },
        { page: 1, pageSize: 2 }
      );

      const results = await Promise.all(
        events.results.map(async (event) => {
          const formattedEvent = await formatDataEvent(event);
          return { ...event, ...formattedEvent };
        })
      );

      return {
        data: results,
        pagination: events.pagination,
        message: "",
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the events",
      };
    }
  },
  async getEventDetail(ctx) {
    try {
      const { params, query } = ctx;
      const { id } = params;

      const event = await findOneEvent({ id_event: id });
      if (!event?.id) {
        return { data: null, message: "Event not found", status: false };
      }

      let formData = await formatDataEvent(event);

      formData.sould_out =
        formData.status_event_id.id != 1 ||
        moment(formData.start_date)
          .add(1, "hour")
          .format("YYYY-MM-DD HH:mm:ss") <
          moment().format("YYYY-MM-DD HH:mm:ss");

      const visitCount = Number(formData.visitCount || 0) + 1;
      formData.visitCount = visitCount;

      updateEvent({ id_event: id }, { visitCount: visitCount });

      return {
        data: formData,
        message: "",
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the events",
      };
    }
  },
  async getMyEventList(ctx) {
    try {
      const { user, query } = ctx;
      const { page, size } = query;

      const events = await findPageEvent(
        { organizer_id: user.id },
        {
          page,
          pageSize: size,
        },
        true
      );

      const results = await Promise.all(
        events.results.map(async (event) => {
          const formattedEvent = await formatDataEvent(event);
          return { ...event, ...formattedEvent };
        })
      );

      return {
        data: results,
        pagination: events.pagination,
        message: "",
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the events",
      };
    }
  },
  async getEventSharedList(ctx) {
    try {
      const { user, query } = ctx;
      const { page, size } = query;

      const teamAccess = await findManyTeamAccess({ user_id: user.id });
      if (teamAccess?.length == 0) {
        return { data: null, message: "Team access not found", status: false };
      }

      const listEvents = await Promise.all(
        teamAccess.map(async (team) => {
          const event = await findOneEvent({ id: team.event_id.id });
          let formData = await formatDataEvent(event);
          formData.manager = `${formData.organizer_id.firstname} ${formData.organizer_id.lastname}`;
          return formData;
        })
      );

      return {
        data: listEvents,
        pagination: {},
        message: "",
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the events",
      };
    }
  },
  async getEventAnalytics(ctx) {
    try {
      const { params, user, query } = ctx;
      const { id } = params;
      const { page, size, search } = query;

      const event = await findOneEvent({ id_event: id });
      if (!event?.id) {
        return { data: null, message: "Event not found", status: false };
      }

      const eventAnaly = await strapi.db.connection.raw(
        `SELECT get_event_analy(?)`,
        [event.id]
      );

      const orders = await findPageOrder(
        {
          event_id: event.id,
          total_price: { $ne: 0 },
          ...(search.length > 2 && {
            $or: [
              { user_id: { email: { $containsi: search || "" } } },
              { user_id: { firstname: { $containsi: search || "" } } },
              { user_id: { lastname: { $containsi: search || "" } } },
            ],
          }),
        },
        {
          page,
          pageSize: size,
        }
      );

      const resOrders = await Promise.all(
        orders.results
          .map((order) => ({
            ...order,
            total_base: order?.price?.subTotal
              ? order?.price?.subTotal || 0
              : (order?.total_price || 0) - (order?.price?.price || 0),
          }))
          .map(async (order) => {
            delete order.price;
            delete order.total_price;
            delete order.stripe_id;

            const discount = order?.discount_code_id;
            if (discount) {
              if (discount.state == "val") {
                order.total_base -= discount.value || 0;
              } else {
                order.total_base = Number(
                  (
                    order.total_base -
                    (order.total_base * discount.value || 0) / 100
                  ).toFixed(2)
                );
              }
            }

            const tickets = await findManyTicket({
              order_id: order.id,
            });
            order.tickets = reduceElements(
              tickets.map((ticket) => ({
                ...ticket.ticket_type_id,
                amount: 1,
              })),
              { elemen: "id" }
            );
            return order;
          })
      );

      let eventAnalyRes = JSON.parse(eventAnaly.rows[0].get_event_analy);

      if (user.id != event.organizer_id.id) {
        eventAnalyRes.splice(0, 1);
      }

      return {
        data: {
          analytics: eventAnalyRes,
          orders: resOrders,
        },
        pagination: orders.pagination,
        message: "",
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the events",
      };
    }
  },
  async getEventFreeTiekcts(ctx) {
    try {
      const { params, query } = ctx;
      const { id } = params;
      const { page, size, search } = query;

      const event = await findOneEvent({ id_event: id });
      if (!event?.id) {
        return { data: null, message: "Event not found", status: false };
      }

      const orders = await findPageOrder(
        {
          event_id: event.id,
          // total_base: 0,
          ...(search.length > 2 && {
            $or: [
              { user_id: { email: { $containsi: search || "" } } },
              { user_id: { firstname: { $containsi: search || "" } } },
              { user_id: { lastname: { $containsi: search || "" } } },
            ],
          }),
        },
        {
          page,
          pageSize: size,
        }
      );

      const resOrders = await Promise.all(
        orders.results.map(async (order) => {
          delete order.price;
          delete order.total_price;
          delete order.stripe_id;

          const tickets = await findManyTicket({
            order_id: order.id,
          });
          order.tickets = reduceElements(
            tickets.map((ticket) => ({
              ...ticket.ticket_type_id,
              amount: 1,
            })),
            { elemen: "id" }
          );
          return order;
        })
      );

      return {
        data: {
          analytics: [
            {
              label: "Tickets Submitted",
              value: orders.pagination.total,
            },
          ],
          orders: resOrders,
        },
        pagination: orders.pagination,
        message: "",
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the events",
      };
    }
  },
  async getEventDiscountCode(ctx) {
    try {
      const { params, query } = ctx;
      const { id } = params;
      const { page, size, search } = query;

      const event = await findOneEvent({ id_event: id });
      if (!event?.id) {
        return { data: null, message: "Event not found", status: false };
      }

      const discountCodes = await findPageDiscountCode(
        {
          event_id: event.id,
          ...(search.length > 2 && {
            $or: [{ name: { $containsi: search || "" } }],
          }),
        },
        {
          page,
          pageSize: size,
        }
      );

      return {
        data: {
          analytics: [
            {
              label: "Codes Created",
              value: discountCodes.pagination.total,
            },
          ],
          data: discountCodes.results,
        },
        pagination: discountCodes.pagination,
        message: "",
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the events",
      };
    }
  },
  async getEventScanner(ctx) {
    try {
      const { params } = ctx;
      const { idEvent, idOrder } = params;

      const event = await findOneEvent({
        id_event: idEvent,
        end_date: {
          $gte: moment().format("YYYY-MM-DD HH:mm:ss"),
        },
      });
      if (!event?.id) {
        return { data: null, message: "Event not found", status: false };
      }

      const ticket = await findOneTicket({ id_ticket: idOrder });
      if (!ticket?.id) {
        return { data: null, message: "Ticket not found", status: false };
      }

      if (ticket.scanner) {
        return { data: null, message: "Ticket already scanned", status: false };
      }

      const order = await findOneOrder({ id: ticket.order_id.id });

      const resData = {
        id: idOrder || "",
        name: `${order.user_id.firstname} ${order.user_id.lastname}`,
        eventName: event?.event_name || "",
        ticketType: ticket?.ticket_type_id.name || "",
      };

      return {
        data: resData,
        message: "",
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: "Ticket not found",
      };
    }
  },
  async getEventScannerCreate(ctx) {
    try {
      const { params, user } = ctx;
      const { idEvent, idOrder } = params;

      const event = await findOneEvent({
        id_event: idEvent,
        end_date: {
          $gte: moment().format("YYYY-MM-DD HH:mm:ss"),
        },
      });
      if (!event?.id) {
        return { data: null, message: "Event not found", status: false };
      }

      const userTeam = await findOneTeamAccess({
        event_id: event.id,
        user_id: user.id,
      });

      if (event.organizer_id.id != user.id && !userTeam?.id) {
        return {
          data: userTeam,
          message: "You are not authorized to perform this action",
          status: false,
        };
      }

      const ticket = await findOneTicket({ id_ticket: idOrder });
      if (!ticket?.id) {
        return { data: null, message: "Ticket not found", status: false };
      }

      await updateTicket(
        { id: ticket?.id },
        { scanner: true, scanner_date: moment().format("YYYY-MM-DD HH:mm:ss") }
      );

      return {
        data: {},
        message: "",
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: "Ticket not found",
      };
    }
  },
  // -------------------------------------------------------------
  // POST
  async postCreateEvent(ctx) {
    try {
      const { body, user } = ctx;
      const { data, ticktes } = body;

      const mapData = await validateOrCreateMap(
        { idMap: data.map.idMap },
        data.map
      );

      if (!mapData) {
        return {
          status: false,
          data: null,
          message: "An error occurred while fetching the events",
        };
      }

      const eventData = {
        event_name: data.event_name,
        youtube_url: data.youtube_url,
        contact_phone: `${data.contact_phone}`,
        venue: data.venue,
        description: data.description,
        start_date: data.start_date,
        end_date: data.end_date,
        event_category_id: data.event_category,
        organizer_id: user?.id,
        event_age_restriction_id: data.event_age_restriction,
        status_event_id: 1,
        map_id: mapData.id,
      };

      const event = await createEvent(eventData);

      const eventEncrypt = encrypt(`eventId_${event.id}`);

      await updateEvent({ id: event.id }, { id_event: eventEncrypt });

      const listTicktes = ticktes.map((ticket) => ({
        ...ticket,
        min_quantity_limit: 1,
        max_quantity_limit: ticket.max_capacity,
      }));

      const ticketsTypes = await createManyTicketTypes(listTicktes);

      ticketsTypes.ids.map((id) => {
        updateTicketTypes({ id }, { event_id: event.id });
      });

      return {
        data: eventEncrypt,
        // data: "5e55d9aed0b228671045",
        message: "",
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the events",
      };
    }
  },
  // -------------------------------------------------------------
  // PUT
  async putUpdateEventImage(ctx) {
    try {
      const { user, params, files } = ctx;

      const event = await findOneEvent({ id_event: params.id });

      if (!event?.id || event.organizer_id.id != user.id) {
        return { data: null, message: "Event not found", status: false };
      }

      event?.image && event?.image[0]?.id && deleteImage(event.image[0].id);

      const createdFiles = await strapi.plugins.upload.services.upload.upload({
        data: {
          path: "events",
          fileInfo: {
            name: `eventId_${event.id}.png`,
            caption: "Caption",
            folder: 1,
          },
        },
        files: files.image,
      });

      await updateEvent({ id_event: params.id }, { image: createdFiles[0].id });

      return {
        data: params.id,
        message: "",
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the events",
      };
    }
  },
  // -------------------------------------------------------------
}));
