"use strict";

const { findManyCategories } = require("./services");

/**
 * event-categorie service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::event-categorie.event-categorie",
  ({ strapi }) => ({
    async getListCategories() {
      try {
        const categories = await findManyCategories();

        return {
          data:
            categories.length > 0
              ? categories?.map((category) => ({
                  value: category.id,
                  label: category.name,
                }))
              : [],
          message: "",
          status: true,
        };
      } catch (error) {
        return {
          status: false,
          data: null,
          message: "Error while fetching categories",
        };
      }
    },
  })
);
