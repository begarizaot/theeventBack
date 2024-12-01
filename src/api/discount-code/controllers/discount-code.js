"use strict";

/**
 * discount-code controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const table = "api::discount-code.discount-code";
module.exports = createCoreController(table, ({ strapi }) => ({
  async getDiscountCodeList(ctx) {
    const {
      params,
      state: { user },
    } = ctx;
    return await strapi.service(table).getDiscountCodeList({ params, user });
  },

  async postDiscountCodeEvent(ctx) {
    const {
      params,
      request: { body },
    } = ctx;
    return await strapi.service(table).postDiscountCodeEvent({ params, body });
  },

  async postDiscountCodeCreate(ctx) {
    const {
      params,
      request: { body },
      state: { user },
    } = ctx;
    return await strapi
      .service(table)
      .postDiscountCodeCreate({ params, body, user });
  },

  async putDiscountCodeUpdate(ctx) {
    const {
      params,
      request: { body },
      state: { user },
    } = ctx;
    return await strapi
      .service(table)
      .putDiscountCodeUpdate({ params, body, user });
  },
}));
