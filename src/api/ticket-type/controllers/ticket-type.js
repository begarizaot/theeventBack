"use strict";

/**
 * ticket-type controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const table = "api::ticket-type.ticket-type";

module.exports = createCoreController(table, ({ strapi }) => ({
  async getListTicketTypeByEvent(ctx) {
    const { params } = ctx;
    let response = await strapi
      .service(table)
      .getListTicketTypeByEvent({ params });
    return response;
  },
}));
