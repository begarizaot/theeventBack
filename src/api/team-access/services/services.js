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

const updateTeamAccess = async (where = {}, data = {}) => {
  return strapi.query("api::team-access.team-access").update({
    where: {
      ...where,
    },
    data: data,
    populate: populate,
  });
};

const createTeamAccess = async (data = {}) => {
  return strapi.query("api::team-access.team-access").create({
    data: {
      ...data,
      publishedAt: new Date(),
      state: true,
    },
    populate: populate,
  });
};

const deleteTeamAccess = async (where = {}) => {
  return strapi.query("api::team-access.team-access").delete({
    where: {
      ...where,
    },
    populate: populate,
  });
};

module.exports = {
  findOneTeamAccess,
  findManyTeamAccess,
  updateTeamAccess,
  createTeamAccess,
  deleteTeamAccess,
};
