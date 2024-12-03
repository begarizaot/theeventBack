"use strict";

const { findManyAgeRestriction } = require("./services");

/**
 * discount service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::event-age-restriction.event-age-restriction",
  ({ strapi }) => ({
    async getListAgeRestriction() {
      try {
        const ageRestriction = await findManyAgeRestriction();

        return {
          data:
            ageRestriction.length > 0
              ? ageRestriction?.map((ageRestriction) => ({
                  value: ageRestriction.id,
                  label: ageRestriction.name,
                }))
              : [],
          message: "",
          status: true,
        };
      } catch (error) {
        return {
          status: false,
          data: null,
          message: "Error while fetching age restriction",
        };
      }
    },
  })
);
