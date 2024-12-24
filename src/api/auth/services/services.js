"use strict";

const validateOrCreateUser = async (body) => {
  let userData = await strapi.db
    .query("plugin::users-permissions.user")
    .findOne({
      where: { email: { $eqi: body.email } },
      populate: true,
    });

  if (!userData) {
    userData = strapi.db.query("plugin::users-permissions.user").create({
      data: { ...body, role: [3], publishedAt: new Date() },
    });
  } else {
    userData = await strapi.db.query("plugin::users-permissions.user").update({
      where: { id: userData.id },
      data: body,
      populate: {
        role: true,
      },
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

const createUser = async (data) => {
  return strapi.db.query("plugin::users-permissions.user").create({
    data: { ...data, role: [3], publishedAt: new Date() },
  });
};

module.exports = {
  validateOrCreateUser,
  findOneUser,
  createUser,
};
