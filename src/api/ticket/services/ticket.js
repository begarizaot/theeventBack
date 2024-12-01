"use strict";

/**
 * ticket service
 */

const { createCoreService } = require("@strapi/strapi").factories;

const table = "api::ticket.ticket";
module.exports = createCoreService(table, ({ strapi }) => ({}));
