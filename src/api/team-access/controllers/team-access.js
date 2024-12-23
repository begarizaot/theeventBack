"use strict";

/**
 * team-access controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const table = "api::team-access.team-access";
module.exports = createCoreController(table, ({ strapi }) => ({
  // GET
  async getTeamAccessList(ctx) {
    const {
      params,
      state: { user },
    } = ctx;
    let response = await strapi
      .service(table)
      .getTeamAccessList({ params, user });
    return response;
  },
  // -------------------------------------------------------------
  // POST
  async postCreateTeamAccess(ctx) {
    const {
      params,
      state: { user },
      request: { body },
    } = ctx;
    let response = await strapi
      .service(table)
      .postCreateTeamAccess({ params, user, body });
    return response;
  },
  // -------------------------------------------------------------

  // PUT
  async putUpdateTeamAccess(ctx) {
    const {
      params,
      state: { user },
      request: { body },
    } = ctx;
    let response = await strapi
      .service(table)
      .putUpdateTeamAccess({ params, user, body });
    return response;
  },
  // -------------------------------------------------------------

  // DELETE
  async delRemoveTeamAccess(ctx) {
    const {
      params,
      state: { user },
    } = ctx;
    let response = await strapi
      .service(table)
      .delRemoveTeamAccess({ params, user });
    return response;
  },
  // -------------------------------------------------------------
}));
