"use strict";

/**
 * event-age-restriction controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const table = "api::event-age-restriction.event-age-restriction";

module.exports = createCoreController(table, ({ strapi }) => ({
  async getListAgeRestriction() {
    let response = await strapi.service(table).getListAgeRestriction();
    return response;
  },
}));
