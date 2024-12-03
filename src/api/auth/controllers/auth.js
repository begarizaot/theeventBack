// extensions/users-permissions/controllers/Auth.js

"use strict";

const { findOneUser } = require("../services/services");

module.exports = {
  async postRegisterUser(ctx) {},
  async postLoginUser(ctx) {
    try {
      const { body } = ctx.request;
      const user = await findOneUser({ email: { $eqi: body.email } });
      const validPassword = await strapi.plugins[
        "users-permissions"
      ].services.user.validatePassword(body.password, user.password);
      if (!validPassword) {
        return {
          status: false,
          data: null,
          message: "password not match",
        };
      }

      return {
        status: true,
        data: {
          user: {
            id: user.id,
            email: user.email,
            username: `${user.firstname} ${user.lastname}`,
            firstname: user.firstname,
            lastname: user.lastname,
            phone: user.phone,
            role: user.role.name,
            idRole: user.role.id,
          },
          token: strapi.plugins["users-permissions"].services.jwt.issue({
            id: user.id,
          }),
        },
        message: "",
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: "user not found",
      };
    }
  },
  async postForgotPasswordUser(ctx) {},
};
