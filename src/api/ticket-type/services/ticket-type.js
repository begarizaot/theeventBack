"use strict";

const { findManyTicketTypes } = require("./services");
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
}));
