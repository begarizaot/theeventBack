const populate = {
  event_id: {
    select: ["id"],
  },
  team_type_role_id: {
    select: ["id", "name"],
  },
  user_id: {
    select: ["id", "email", "firstname", "lastname", "phone"],
  },
};
const findOneTeamAccess = async (where = {}) => {
  return strapi.query("api::team-access.team-access").findOne({
    where: {
      ...where,
      publishedAt: {
        $null: false,
      },
    },
    populate: populate,
  });
};

const findManyTeamAccess = async (where = {}) => {
  return strapi.query("api::team-access.team-access").findMany({
    where: {
      ...where,
      publishedAt: {
        $null: false,
      },
    },
    populate: populate,
  });
};

module.exports = {
  findOneTeamAccess,
  findManyTeamAccess,
};
