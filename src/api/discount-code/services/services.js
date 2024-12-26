"use strict";

const moment = require("moment");

const findOneDiscountCode = async (where = {}, admin = false) => {
  return strapi.query("api::discount-code.discount-code").findOne({
    where: {
      ...where,
      ...(!admin && {
        end_date: {
          $gte: moment().format("YYYY-MM-DD HH:mm:ss"),
        },
      }),
      publishedAt: {
        $null: false,
      },
    },
  });
};

const findManyDiscountCode = async (where = {}) => {
  return strapi.query("api::discount-code.discount-code").findMany({
    where: {
      ...where,
      publishedAt: {
        $null: false,
      },
    },
  });
};

const findPageDiscountCode = async (
  where = {},
  pageData = {
    pageSize: 10,
    page: 1,
  }
) => {
  return strapi.query("api::discount-code.discount-code").findPage({
    where: {
      ...where,
      publishedAt: {
        $null: false,
      },
    },
    ...pageData,
  });
};

const createDiscountCode = async (data) => {
  return strapi.db.query("api::discount-code.discount-code").create({
    data: { ...data, publishedAt: new Date() },
  });
};

const updateDiscountCode = async (where, data) => {
  return strapi.db.query("api::discount-code.discount-code").update({
    where: where,
    data: data,
  });
};

module.exports = {
  findOneDiscountCode,
  updateDiscountCode,
  createDiscountCode,
  findManyDiscountCode,
  findPageDiscountCode,
};
