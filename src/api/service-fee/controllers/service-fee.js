"use strict";

/**
 * service-fee controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const table = "api::service-fee.service-fee";

module.exports = createCoreController(table, ({ strapi }) => ({
  async getListServiceFee(ctx) {
    const data = {
      params: ctx.params,
    };
    let response = await strapi.service(table).getListServiceFee(data);
    return response;
  },
}));
