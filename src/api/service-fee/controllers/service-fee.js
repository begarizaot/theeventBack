"use strict";

/**
 * service-fee controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const table = "api::service-fee.service-fee";

module.exports = createCoreController(table, ({ strapi }) => ({
  async getServiceFee() {
    let response = await strapi.service(table).getServiceFee();
    return response;
  },
}));
