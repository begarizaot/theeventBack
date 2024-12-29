"use strict";

const {
  findManyTicketTypes,
  findOneEventTicketTypes,
  updateTicketTypes,
  createTicketTypes,
  deleteTicketTypes,
} = require("./services");
const { findOneEvent } = require("../../event/services/services");

/**
 * ticket-type service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::ticket-type.ticket-type", ({}) => ({
  // GETS
  async getListTicketTypeByEvent(ctx) {
    try {
      const { params } = ctx;
      const { id } = params;

      const event = await findOneEvent({ id_event: id });
      if (!event?.id) {
        return { data: null, message: "Event not found", status: false };
      }

      const tiktest = await findManyTicketTypes({ event_id: event.id });

      return {
        data: tiktest,
        message: "",
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message:
          error.message || "An error occurred while processing your request",
      };
    }
  },
  // POSTS
  async postValidateTicketEvent(ctx) {
    try {
      const { params, body } = ctx;
      const { id } = params;

      const event = await findOneEvent({ id_event: id });
      if (!event?.id) {
        return { data: null, message: "Event not found", status: false };
      }

      const tiktest = await findManyTicketTypes({ event_id: event.id });
      let ticketsAvailable = false;

      await Promise.all(
        body.map(async (ticket) => {
          const ticketType = tiktest.find((t) => t.id === ticket.id);
          !ticketType && (ticketsAvailable = true);

          (ticketType.max_capacity < ticket.quantity || ticketType.soldOut) &&
            (ticketsAvailable = true);
        })
      );

      if (ticketsAvailable) {
        return {
          data: null,
          message: "Not enough tickets available",
          status: false,
        };
      }

      return {
        data: {},
        message: "",
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: "Failed to validate ticket, please try again later",
      };
    }
  },
  async postCreateTicketEvent(ctx) {
    try {
      const { params, body, user } = ctx;
      const { id } = params;

      const event = await findOneEvent({ id_event: id });
      if (!event?.id) {
        return { data: null, message: "Event not found", status: false };
      }

      if (event?.organizer_id?.id !== user.id) {
        return {
          data: null,
          message: "You are not authorized to update this event",
          status: false,
        };
      }

      await createTicketTypes({
        ...body,
        event_id: event.id,
        min_quantity_limit: 1,
        max_quantity_limit: body.max_capacity,
      });

      return {
        data: {},
        message: "",
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: "Failed to update ticket, please try again later",
      };
    }
  },
  // PUTS
  async putUpdateTicketEvent(ctx) {
    try {
      const { params, body, user } = ctx;
      const { id } = params;

      const event = await findOneEvent({ id_event: id });
      if (!event?.id) {
        return { data: null, message: "Event not found", status: false };
      }

      if (event?.organizer_id?.id !== user.id) {
        return {
          data: null,
          message: "You are not authorized to update this event",
          status: false,
        };
      }

      const ticket = await findOneEventTicketTypes({ id: body.id });
      if (!ticket?.id) {
        return { data: null, message: "Ticket not found", status: false };
      }

      let max_quantity_limit = ticket.max_quantity_limit;
      if (body.max_capacity > max_quantity_limit) {
        max_quantity_limit = body.max_capacity;
      }

      await updateTicketTypes(
        { id: ticket.id },
        { ...body, max_quantity_limit }
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
        message: "Failed to update ticket, please try again later",
      };
    }
  },
  // DELETE
  async deleteTicketEvent(ctx) {
    try {
      const { params, user } = ctx;
      const { id, id_ticket } = params;

      const event = await findOneEvent({ id_event: id });
      if (!event?.id) {
        return { data: null, message: "Event not found", status: false };
      }

      if (event?.organizer_id?.id !== user.id) {
        return {
          data: null,
          message: "You are not authorized to update this event",
          status: false,
        };
      }

      const ticket = await findOneEventTicketTypes({ id: id_ticket });
      if (!ticket?.id) {
        return { data: null, message: "Ticket not found", status: false };
      }

      await deleteTicketTypes({ id: ticket.id });

      return {
        data: {},
        message: "",
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: "Failed to update ticket, please try again later",
      };
    }
  },
}));
