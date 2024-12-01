"use strict";

/**
 * event-type service
 */

const { createCoreService } = require("@strapi/strapi").factories;

const table = "api::event-type.event-type";

module.exports = createCoreService(table, ({ strapi }) => ({}));
