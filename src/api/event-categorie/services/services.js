"use strict";

const findManyCategories = async (where = {}) => {
    return strapi.db
    .query("api::event-categorie.event-categorie")
    .findMany({
      where: { ...where, publishedAt: { $null: false } },
    });
};

module.exports = {
  findManyCategories,
};
