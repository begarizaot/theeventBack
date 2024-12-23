const findManyTeamAccessRole = async (where = {}) => {
  return strapi.query("api::team-type-role.team-type-role").findMany({
    where: {
      ...where,
      publishedAt: {
        $null: false,
      },
    },
  });
};

module.exports = {
  findManyTeamAccessRole,
};
