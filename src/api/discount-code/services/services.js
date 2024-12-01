const findOneDiscountCode = async (strapi, where = {}) => {
  return await strapi.query("api::discount-code.discount-code").findOne({
    where: {
      ...where,
      publishedAt: {
        $null: false,
      },
    },
    populate: true,
  });
};

const findManyDiscountCodes = async (strapi, where = {}) => {
  return await strapi.query("api::discount-code.discount-code").findMany({
    where: {
      ...where,
      publishedAt: {
        $null: false,
      },
    },
    populate: true,
    orderBy: { createdAt: "desc" },
  });
};

const updateDiscountCode = async (strapi, where, data) => {
  return await strapi.db.query("api::discount-code.discount-code").update({
    where: where,
    data: data,
    populate: true,
  });
};

const createDiscountCode = async (strapi, data = {}) => {
  return await strapi.db.query("api::discount-code.discount-code").create({
    data: { ...data, publishedAt: new Date() },
  });
};

module.exports = {
  findOneDiscountCode,
  findManyDiscountCodes,
  updateDiscountCode,
  createDiscountCode,
};
