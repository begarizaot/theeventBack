const findOneTeamAccess = async (strapi, where = {}) => {
  return await strapi.query("api::team-access.team-access").findOne({
    where: {
      ...where,
      publishedAt: {
        $null: false,
      },
    },
    populate: true,
  });
};

module.exports = {
  findOneTeamAccess,
};
