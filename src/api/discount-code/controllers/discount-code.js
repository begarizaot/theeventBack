"use strict";

/**
 * discount-code controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const table = "api::discount-code.discount-code";

module.exports = createCoreController(table, ({ strapi }) => ({
  // POST
  async postDiscountCodeEvent(ctx) {
    const {
      params,
      request: { body },
    } = ctx;
    return await strapi.service(table).postDiscountCodeEvent({ params, body });
  },
  async postDiscountCreateEvent(ctx) {
    const {
      params,
      request: { body },
      state: { user },
    } = ctx;
    return await strapi
      .service(table)
      .postDiscountCreateEvent({ params, body, user });
  },
  async postDiscountStatusEvent(ctx) {
    const {
      params,
      request: { body },
      state: { user },
    } = ctx;
    return await strapi
      .service(table)
      .postDiscountStatusEvent({ params, body, user });
  },
  // ------------------------------------------------------
  // PUTS
  async putDiscountEditEvent(ctx) {
    const {
      params,
      request: { body },
      state: { user },
    } = ctx;
    return await strapi
      .service(table)
      .putDiscountEditEvent({ params, body, user });
  },
  // ------------------------------------------------------
}));
