// @ts-nocheck
"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  // GET
  async getOrderStateUpdate(ctx) {
    const { params } = ctx;
    return await strapi
      .service("api::order.order")
      .getOrderStateUpdate({ params });
  },
  async getMailForwarding(ctx) {
    const { params } = ctx;
    return await strapi
      .service("api::order.order")
      .getMailForwarding({ params });
  },
  async getOrdersForUser(ctx) {
    const {
      state: { user },
    } = ctx;
    return await strapi.service("api::order.order").getOrdersForUser({ user });
  },

  async getOrderDetails(ctx) {
    const { params } = ctx;
    return await strapi.service("api::order.order").getOrderDetails({ params });
  },

  async getOrdersExport(ctx) {
    const {
      params,
      state: { user },
    } = ctx;
    const response = await strapi
      .service("api::order.order")
      .getOrdersExport({ params, user });

    // Configura el tipo de contenido y el encabezado de descarga
    ctx.set("Content-Disposition", 'attachment; filename="orders.xlsx"');
    ctx.set(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    ctx.body = response;

    return response;
  },
  async getOrderTicketsDownload(ctx) {
    const { params } = ctx;
    return await strapi.service("api::order.order").getOrderTicketsDownload({ params });
  },
  // -------------------------------------------------------------
  // POST
  async postOrderCreation(ctx) {
    const {
      params,
      request: { body },
      state: { user },
    } = ctx;
    return await strapi
      .service("api::order.order")
      .postOrderCreation({ params, body, user });
  },

  async postOrderRefunds(ctx) {
    const {
      params,
      request: { body },
      state: { user },
    } = ctx;
    return await strapi
      .service("api::order.order")
      .postOrderRefunds({ params, body, user });
  },

  async postFreeTicketOrders(ctx) {
    const {
      params,
      request: { body },
      state: { user },
    } = ctx;
    return await strapi
      .service("api::order.order")
      .postFreeTicketOrders({ params, body, user });
  },

  // -------------------------------------------------------------
  // PUT
  async putStripeOrderUpdate(ctx) {
    const data = {
      params: ctx.params,
      body: ctx.request["body"],
      user: ctx.state.user,
    };
    let response = await strapi
      .service("api::order.order")
      .putStripeOrderUpdate(data);
    return response;
  },
  // -------------------------------------------------------------
}));
