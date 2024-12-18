"use strict";

/**
 * ticket controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const table = "api::ticket.ticket";
module.exports = createCoreController(table, ({ strapi }) => ({
  // GET
  async getListMyTicket(ctx) {
    const {
      request: { query },
      state: { user },
    } = ctx;
    let response = await strapi.service(table).getListMyTicket({ user, query });
    return response;
  },
  async getDetailMyTicket(ctx) {
    const {
      params,
      state: { user },
    } = ctx;
    let response = await strapi
      .service(table)
      .getDetailMyTicket({ user, params });
    return response;
  },
  // -------------------------------------------------------------
}));
