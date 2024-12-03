"use strict";

const populate = {
  event_id: {
    select: ["id"],
  },
  status_order_id: {
    select: ["id", "name"],
  },
  user_id: {
    select: ["id", "email", "firstname", "lastname", "phone"],
  },
};

const findOneOrder = async (where = {}) => {
  return strapi.query("api::order.order").findOne({
    where: {
      ...where,
      publishedAt: {
        $null: false,
      },
    },
    populate: populate,
  });
};

const createOrder = async (data) => {
  return strapi.db.query("api::order.order").create({
    data: { ...data, publishedAt: new Date() },
  });
};

const updateOrder = async (where, data) => {
  return strapi.db.query("api::order.order").update({
    where: where,
    data: data,
  });
};

module.exports = {
  findOneOrder,
  createOrder,
  updateOrder,
};
