const moment = require("moment");

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

const findOneEvent = async (where = {}) => {
  return strapi.query("api::event.event").findOne({
    where: {
      ...where,
      publishedAt: {
        $null: false,
      },
    },
    orderBy: { start_date: "asc" },
    populate: populate,
  });
};

const findPageEvent = async (
  where = {},
  pageData = {
    pageSize: 10,
    page: 1,
  },
  admin = false
) => {
  return strapi.query("api::event.event").findPage({
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
    orderBy: { start_date: "desc" },
    populate: populate,
    ...pageData,
  });
};

const updateEvent = async (where = {}, data = {}) => {
  return strapi.query("api::event.event").update({
    where: {
      ...where,
    },
    data: data,
    populate: populate,
  });
};

const createEvent = async (data = {}) => {
  return strapi.query("api::event.event").create({
    data: {
      ...data,
      publishedAt: new Date(),
    },
    populate: populate,
  });
};

module.exports = {
  findOneEvent,
  findPageEvent,
  updateEvent,
  createEvent,
};
