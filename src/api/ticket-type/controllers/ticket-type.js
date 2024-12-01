"use strict";

/**
 * ticket-type controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const table = "api::ticket-type.ticket-type";

module.exports = createCoreController(table, ({ strapi }) => ({
  async ticketsEvent(ctx) {
    const data = {
      params: ctx.params,
    };
    let response = await strapi.service(table).ticketsEvent(data);
    return response;
  },
  async createTicketsEvent(ctx) {
    const data = {
      params: ctx.params,
      body: ctx.request["body"],
      user: ctx.state.user,
    };
    let response = await strapi.service(table).createTicketsEvent(data);
    return response;
  },
  async updateTicketsEvent(ctx) {
    const data = {
      params: ctx.params,
      body: ctx.request["body"],
      user: ctx.state.user,
    };
    let response = await strapi.service(table).updateTicketsEvent(data);
    return response;
  },
  async deleteTicketsEvent(ctx) {
    const data = {
      params: ctx.params,
      user: ctx.state.user,
    };
    let response = await strapi.service(table).deleteTicketsEvent(data);
    return response;
  },
}));
