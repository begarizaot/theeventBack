"use strict";

/**
 * event-categorie service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::event-categorie.event-categorie",
  ({ strapi }) => ({})
);
