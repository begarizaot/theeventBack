"use strict";

/**
 * service-fee service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::service-fee.service-fee",
  ({ strapi }) => ({
    async getServiceFee() {
      try {
        const service = await strapi
          .query("api::service-fee.service-fee")
          .findOne({
            populate: true,
          });
        let data = { ...service.priceToCharge };
        (!service || !service.priceToCharge) &&
          (data = {
            fixedFee: 0.3,
            percentageFee: 0.029,
            desiredProfitMargin: 0.15,
          });
        return { data: data, message: "", status: true };
      } catch (e) {
        return {
          status: false,
          data: null,
          message: `${e?.message || ""}`,
        };
      }
    },
  })
);
