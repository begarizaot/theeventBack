// @ts-nocheck
"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  // GET
  async getDowloandOrder(ctx) {
    const { params } = ctx;
    const response = await strapi
      .service("api::order.order")
      .getDowloandOrder({ params });
    return response;
  },
  async getForwardMailOrder(ctx) {
    const {
      params,
      state: { user },
    } = ctx;
    const response = await strapi
      .service("api::order.order")
      .getForwardMailOrder({ params, user });
    return response;
  },
  // -------------------------------------------------------------
  // POST
  async postCreatePayment(ctx) {
    const {
      request: { body },
      state: { user },
    } = ctx;
    return await strapi
      .service("api::order.order")
      .postCreatePayment({ body, user });
  },
  async postCreateOrder(ctx) {
    const {
      request: { body },
      state: { user },
    } = ctx;
    return await strapi
      .service("api::order.order")
      .postCreateOrder({ body, user });
  },
  // -------------------------------------------------------------
  // PUT

  // -------------------------------------------------------------
}));
