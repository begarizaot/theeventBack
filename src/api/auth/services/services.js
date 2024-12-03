"use strict";

const validateOrCreateUser = async (body) => {
  let userData = await strapi.db.query("plugin::users-permissions.user").findOne({
    where: { email: { $eqi: body.email } },
    populate: true,
  });

  if (!userData) {
    userData = strapi.db.query("plugin::users-permissions.user").create({
      data: { ...body, role: [3], publishedAt: new Date() },
    });
  }

  return userData;
};

const findOneUser = async (where) => {
  return strapi.db.query("plugin::users-permissions.user").findOne({
    where: { ...where },
    populate: true,
  });
};

module.exports = {
  validateOrCreateUser,
  findOneUser,
};
