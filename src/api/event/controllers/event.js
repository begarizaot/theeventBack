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
  async getMyEventList(ctx) {
    const {
      params,
      request: { body },
      state: { user },
    } = ctx;
    const response = await strapi
      .service("api::event.event")
      .getMyEventList({ params, body, user });
    return response;
  },
  async getOtherEventList(ctx) {
    const {
      params,
      request: { body },
      state: { user },
    } = ctx;
    let response = await strapi
      .service("api::event.event")
      .getOtherEventList({ params, body, user });
    return response;
  },
  async getEventDetail(ctx) {
    const {
      params,
      request: { body, query },
    } = ctx;
    let response = await strapi
      .service("api::event.event")
      .getEventDetail({ params, body, query });
    return response;
  },
  async getEventAnalytics(ctx) {
    const {
      params,
      state: { user },
    } = ctx;
    let response = await strapi
      .service("api::event.event")
      .getEventAnalytics({ params, user });
    return response;
  },
  async getFreeTicketsForEvent(ctx) {
    const {
      params,
      state: { user },
    } = ctx;
    let response = await strapi
      .service("api::event.event")
      .getFreeTicketsForEvent({ params, user });
    return response;
  },
  // -------------------------------------------------------------
  // POST
  async postEventBySearch(ctx) {
    const {
      params,
      request: { body },
    } = ctx;
    let response = await strapi
      .service("api::event.event")
      .postEventBySearch({ params, body });
    return response;
  },
  async postCreateEvent(ctx) {
    const {
      params,
      request: { body },
      state: { user },
    } = ctx;
    let response = await strapi
      .service("api::event.event")
      .postCreateEvent({ params, body, user });
    return response;
  },
  // -------------------------------------------------------------
  // PUT
  async putUpdateImage(ctx) {
    const {
      params,
      request: { body, files },
      state: { user },
    } = ctx;
    const response = await strapi
      .service("api::event.event")
      .putUpdateImage({ params, body, files, user });
    return response;
  },
  // -------------------------------------------------------------
  async putUpdateEvent(ctx) {
    const {
      params,
      request: { body },
      state: { user },
    } = ctx;
    let response = await strapi
      .service("api::event.event")
      .putUpdateEvent({ params, body, user });
    return response;
  },
}));
