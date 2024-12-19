// extensions/users-permissions/controllers/Auth.js

"use strict";

const { findOneUser } = require("../services/services");
const bcrypt = require("bcryptjs");

const onStructureUser = (user) => {
  return {
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
  };
};

module.exports = {
  async postRegisterUser(ctx) {
    try {
      const {
        request: { body },
      } = ctx;

      const userData = await findOneUser({ email: { $eqi: body.email } });

      const password = bcrypt.hashSync(body.password, 10);
      let createData = {
        ...body,
        password,
        phone: `${body.phone}`,
        username: body.email,
        firstname: body.firstName,
        lastname: body.lastName,
        role: 3,
        confirmed: true,
      };

      if (userData && userData.id) {
        const updatedUser = await strapi.db
          .query("plugin::users-permissions.user")
          .update({
            where: { id: userData.id },
            data: createData,
            populate: {
              role: true,
            },
          });

        return {
          status: true,
          data: onStructureUser(updatedUser),
          message: "",
        };
      }

      const createUser = await strapi.db
        .query("plugin::users-permissions.user")
        .create({
          data: createData,
          populate: {
            role: true,
          },
        });

      return {
        status: true,
        data: onStructureUser(createUser),
        message: "",
      };
    } catch (error) {
      console.log(error);
      return {
        status: false,
        data: null,
        message: "An error occurred while creating the user",
      };
    }
  },
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
        data: onStructureUser(user),
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
  async putUpdateUser(ctx) {
    try {
      const {
        request: { body },
        state: { user },
      } = ctx;

      const userData = await findOneUser({ email: { $eqi: user.email } });
      if (!userData) {
        return {
          status: false,
          data: null,
          message: "User not found",
        };
      }

      let updateData = {
        ...(body.firstname && { firstname: body.firstname }),
        ...(body.lastname && { lastname: body.lastname }),
        ...(body.phone && { phone: body.phone }),
      };

      if (body.password) {
        updateData.password = bcrypt.hashSync(body.password, 10);
      }

      const updatedUser = await strapi.db
        .query("plugin::users-permissions.user")
        .update({
          where: { id: user.id },
          data: updateData,
          populate: {
            role: true,
          },
        });

      return {
        status: true,
        data: onStructureUser(updatedUser),
        message: "",
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: "An error occurred while updating the user",
      };
    }
  },
};
