"use strict";
/**
 * team-access service
 */

const { createCoreService } = require("@strapi/strapi").factories;

const table = "api::team-access.team-access";
module.exports = createCoreService(table, ({ strapi }) => ({}));
