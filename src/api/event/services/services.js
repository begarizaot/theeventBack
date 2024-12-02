const populate = {
  organizer_id: {
    select: ["id", "email", "firstname", "lastname", "phone"],
  },
  event_age_restriction_id: {
    select: ["id", "name"],
  },
  status_event_id: {
    select: ["id", "name"],
  },
  event_category_id: {
    select: ["id", "name"],
  },
  image: {
    select: ["id", "url"],
  },
  map_id: {
    select: ["id", "idMap", "label", "labelCompl"],
  },
};

const findOneEvent = async (strapi, where = {}) => {
  return strapi.query("api::event.event").findOne({
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

const findPageEvent = async (
  strapi,
  where = {},
  pageData = {
    pageSize: 10,
    page: 1,
  }
) => {
  return strapi.query("api::event.event").findPage({
    where: {
      ...where,
      publishedAt: {
        $null: false,
      },
    },
    orderBy: { start_date: "asc" },
    populate: populate,
    ...pageData,
  });
};

module.exports = {
  findOneEvent,
  findPageEvent,
};
