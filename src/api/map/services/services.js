const validateOrCreateMap = async (where = {}, body) => {
  let mapData = await strapi.db.query("api::map.map").findOne({
    where: { ...where },
    populate: true,
  });

  if (!mapData) {
    mapData = strapi.db.query("api::map.map").create({
      data: { ...body, publishedAt: new Date() },
    });
  }

  return mapData;
};

const findOneMap = async (where = {}) => {
  return strapi.query("api::map.map").findOne({
    where: {
      ...where,
      publishedAt: {
        $null: false,
      },
    },
  });
};

module.exports = {
  validateOrCreateMap,
  findOneMap,
};
