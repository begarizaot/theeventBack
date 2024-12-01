"use strict";

/**
 * ticket controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const table = "api::ticket.ticket";
module.exports = createCoreController(table, ({ strapi }) => ({
  async listHistoryTicket(ctx) {
    const data = {
      params: ctx.params,
      user: ctx.state.user,
    };
    let response = await strapi.service(table).listHistoryTicket(data);
    return response;
  },
  async detailTicket(ctx) {
    const data = {
      params: ctx.params,
      user: ctx.state.user,
    };
    let response = await strapi.service(table).detailTicket(data);
    return response;
  },
  async scanTicketCode(ctx) {
    const data = {
      params: ctx.params,
      user: ctx.state.user,
      body: ctx.request["body"],
    };
    let response = await strapi.service(table).scanTicketCode(data);
    return response;
  },
}));
