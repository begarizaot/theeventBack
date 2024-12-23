"use strict";

/**
 * team-type-role controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const table = "api::team-type-role.team-type-role";
module.exports = createCoreController(table, ({ strapi }) => ({
  async getTeamTypeRoles() {
    let response = await strapi
      .service(table)
      .getTeamTypeRoles();
    return response;
  },
}));
