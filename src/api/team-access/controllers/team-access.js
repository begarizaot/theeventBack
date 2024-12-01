"use strict";

/**
 * team-access controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const table = "api::team-access.team-access";
module.exports = createCoreController(table, ({ strapi }) => ({
  async listTeamEvent(ctx) {
    const data = {
      params: ctx.params,
      user: ctx.state.user,
    };
    let response = await strapi.service(table).listTeamEvent(data);
    return response;
  },
  async createTeamAcces(ctx) {
    const data = {
      params: ctx.params,
      body: ctx.request["body"],
      user: ctx.state.user,
    };
    let response = await strapi.service(table).createTeamAcces(data);
    return response;
  },
  async updateTeamAcces(ctx) {
    const data = {
      params: ctx.params,
      body: ctx.request["body"],
      user: ctx.state.user,
    };
    let response = await strapi.service(table).updateTeamAcces(data);
    return response;
  },
  async deleteTeamAcces(ctx) {
    const data = {
      params: ctx.params,
      user: ctx.state.user,
    };
    let response = await strapi.service(table).deleteTeamAcces(data);
    return response;
  },
}));
