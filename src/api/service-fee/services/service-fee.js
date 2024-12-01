"use strict";

/**
 * service-fee service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::service-fee.service-fee",
  ({ strapi }) => ({})
);
