"use strict";

/**
 * discount-code controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const table = "api::discount-code.discount-code";

module.exports = createCoreController(table, ({ strapi }) => ({
  async postDiscountCodeEvent(ctx) {
    const {
      params,
      request: { body },
    } = ctx;
    return await strapi.service(table).postDiscountCodeEvent({ params, body });
  },
}));
