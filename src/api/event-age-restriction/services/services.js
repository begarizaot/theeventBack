"use strict";

const findManyAgeRestriction = async (where = {}) => {
  return strapi.db
    .query("api::event-age-restriction.event-age-restriction")
    .findMany({
      where: { ...where, publishedAt: { $null: false } },
      orderBy: { id: "asc" },
    });
};

module.exports = {
  findManyAgeRestriction,
};
