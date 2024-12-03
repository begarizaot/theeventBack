"use strict";

const { findManyTicketTypes } = require("./services");
const { findOneEvent } = require("../../event/services/services");

/**
 * ticket-type service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::ticket-type.ticket-type",
  ({ strapi }) => ({
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
  })
);
