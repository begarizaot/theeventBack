"use strict";

/**
 * ticket-type controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const table = "api::ticket-type.ticket-type";

module.exports = createCoreController(table, ({ strapi }) => ({
  // GETS
  async getListTicketTypeByEvent(ctx) {
    const { params } = ctx;
    let response = await strapi
      .service(table)
      .getListTicketTypeByEvent({ params });
    return response;
  },
  // POSTS
  async postValidateTicketEvent(ctx) {
    const {
      params,
      request: { body },
    } = ctx;
    let response = await strapi
      .service(table)
      .postValidateTicketEvent({ params, body });
    return response;
  },
}));
