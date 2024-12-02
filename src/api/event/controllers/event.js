"use strict";

/**
 * event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  // GET
  async getEventList(ctx) {
    const {
      params,
      request: { body, query },
    } = ctx;
    const response = await strapi
      .service("api::event.event")
      .getEventList({ params, body, query });
    return response;
  },
  async getEventSearch(ctx) {
    const {
      params,
      request: { body, query },
    } = ctx;
    const response = await strapi
      .service("api::event.event")
      .getEventSearch({ params, body, query });
    return response;
  },
  // -------------------------------------------------------------
}));
