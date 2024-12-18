"use strict";

const populate = {
  event_id: {
    select: ["id", "event_name", "start_date"],
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
      status_order_id: 1,
      publishedAt: {
        $null: false,
      },
    },
    populate: populate,
  });
};

const findManyOrder = async (where = {}) => {
  return strapi.query("api::order.order").findMany({
    where: {
      ...where,
      status_order_id: 1,
      publishedAt: {
        $null: false,
      },
    },
    populate: populate,
  });
};

const findPageOrder = async (
  where = {},
  pageData = {
    pageSize: 10,
    page: 1,
  }
) => {
  return strapi.query("api::order.order").findPage({
    where: {
      ...where,
      status_order_id: 1,
      publishedAt: {
        $null: false,
      },
    },
    populate: populate,
    ...pageData,
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
  findManyOrder,
  findPageOrder,
  createOrder,
  updateOrder,
};
