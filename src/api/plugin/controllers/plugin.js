'use strict';

/**
 * plugin controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const table = "api::plugin.plugin";
module.exports = createCoreController(table, ({ strapi }) => ({
  async registerUser(ctx) {
    const data = {
      params: ctx.params,
      body: ctx.request["body"],
    };
    let response = await strapi.service(table).registerUser(data);
    return response;
  },
  async forgotPassword(ctx) {
    const data = {
      params: ctx.params,
      body: ctx.request["body"],
    };
    let response = await strapi.service(table).forgotPassword(data);
    return response;
  },
  async updateUser(ctx) {
    const data = {
      params: ctx.params,
      body: ctx.request["body"],
    };
    let response = await strapi.service(table).updateUser(data);
    return response;
  },
}));