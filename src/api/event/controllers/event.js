"use strict";

/**
 * event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  // GET
  async getEventList(ctx) {
    const {
      request: { query },
    } = ctx;
    const response = await strapi
      .service("api::event.event")
      .getEventList({ query });
    return response;
  },
  async getEventSearch(ctx) {
    const {
      request: { query },
    } = ctx;
    const response = await strapi
      .service("api::event.event")
      .getEventSearch({ query });
    return response;
  },
  async getEventDetail(ctx) {
    const { params } = ctx;
    
    const response = await strapi
      .service("api::event.event")
      .getEventDetail({ params });
    return response;
  },
  async getMyEventList(ctx) {
    const {
      request: { query },
      state: { user },
    } = ctx;
    const response = await strapi
      .service("api::event.event")
      .getMyEventList({ query, user });
    return response;
  },
  async getEventSharedList(ctx) {
    const {
      request: { query },
      state: { user },
    } = ctx;
    const response = await strapi
      .service("api::event.event")
      .getEventSharedList({ query, user });
    return response;
  },
  async getEventAnalytics(ctx) {
    const {
      params,
      request: { query },
      state: { user },
    } = ctx;
    const response = await strapi
      .service("api::event.event")
      .getEventAnalytics({ params, user, query });
    return response;
  },
  async getEventFreeTiekcts(ctx) {
    const {
      params,
      request: { query },
      state: { user },
    } = ctx;
    const response = await strapi
      .service("api::event.event")
      .getEventFreeTiekcts({ params, user, query });
    return response;
  },
  // -------------------------------------------------------------
  // POTS
  async postCreateEvent(ctx) {
    const {
      request: { body },
      state: { user },
    } = ctx;
    const response = await strapi
      .service("api::event.event")
      .postCreateEvent({ body, user });
    return response;
  },
  // -------------------------------------------------------------
  // PUT
  async putUpdateEventImage(ctx) {
    const {
      params,
      request: { files },
      state: { user },
    } = ctx;
    const response = await strapi
      .service("api::event.event")
      .putUpdateEventImage({ user, params, files });
    return response;
  },
  // -------------------------------------------------------------
}));
