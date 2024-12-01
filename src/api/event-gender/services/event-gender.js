"use strict";

/**
 * event-gender service
 */

const { createCoreService } = require("@strapi/strapi").factories;

const table = "api::event-gender.event-gender";

module.exports = createCoreService(table, ({ strapi }) => ({}));
