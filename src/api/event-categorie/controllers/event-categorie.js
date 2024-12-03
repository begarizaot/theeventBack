"use strict";

/**
 * event-categorie controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const table = "api::event-categorie.event-categorie";

module.exports = createCoreController(table, ({ strapi }) => ({
  async getListCategories() {
    let response = await strapi.service(table).getListCategories();
    return response;
  },
}));
