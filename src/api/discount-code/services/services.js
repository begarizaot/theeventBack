"use strict";

const moment = require("moment");

const findOneDiscountCode = async (where = {}) => {
  return strapi.query("api::discount-code.discount-code").findOne({
    where: {
      ...where,
      end_date: {
        $gte: moment().format("YYYY-MM-DD HH:mm:ss"),
      },
      amount: {
        $gt: 0,
      },
      publishedAt: {
        $null: false,
      },
    },
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
};
