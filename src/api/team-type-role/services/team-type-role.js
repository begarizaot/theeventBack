"use strict";

const { findManyTeamAccessRole } = require("./services");

/**
 * team-type-role service
 */

const { createCoreService } = require("@strapi/strapi").factories;

const table = "api::team-type-role.team-type-role";
module.exports = createCoreService(table, ({}) => ({
  async getTeamTypeRoles() {
    try {
      const res = await findManyTeamAccessRole();
      return {
        data:
          res.length > 0
            ? res?.map((role) => ({
                value: role.id,
                label: role.name,
                description: role.description,
              }))
            : [],
        message: "",
        status: true,
      };
    } catch (e) {
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the team type roles",
      };
    }
  },
}));
