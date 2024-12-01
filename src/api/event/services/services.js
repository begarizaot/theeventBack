const findOneEvent = async (strapi, where = {}) => {
  return await strapi.query("api::event.event").findOne({
    where: {
      ...where,
      publishedAt: {
        $null: false,
      },
    },
    orderBy: { event_date: "asc" },
    populate: true,
  });
};

module.exports = {
  findOneEvent,
};
