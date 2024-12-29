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
  async postCreateTicketEvent(ctx) {
    const {
      params,
      request: { body },
      state: { user },
    } = ctx;
    let response = await strapi
      .service(table)
      .postCreateTicketEvent({ params, body, user });
    return response;
  },
  // PUTS
  async putUpdateTicketEvent(ctx) {
    const {
      params,
      request: { body },
      state: { user },
    } = ctx;
    let response = await strapi
      .service(table)
      .putUpdateTicketEvent({ params, body, user });
    return response;
  },
  // DELETE
  async deleteTicketEvent(ctx) {
    const {
      params,
      state: { user },
    } = ctx;
    let response = await strapi
      .service(table)
      .deleteTicketEvent({ params, user });
    return response;
  },
}));
