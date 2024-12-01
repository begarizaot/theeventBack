const findManyTickets = async (strapi, where = {}) => {
  return await strapi.db.query("api::ticket.ticket").findMany({
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

const findOneTicket = async (strapi, where = {}) => {
  return await strapi.db.query("api::ticket.ticket").findOne({
    where: {
      ...where,
      publishedAt: {
        $null: false,
      },
    },
    populate: true,
  });
};

const findWithCountTickets = async (strapi, where = {}) => {
  return await strapi.db.query("api::ticket.ticket").findWithCount({
    where: where,
  });
};

const createTicket = async (strapi, data = {}) => {
  return await strapi.db.query("api::ticket.ticket").create({
    data,
  });
};

const updateTicket = async (strapi, where, data) => {
  return await strapi.db.query("api::ticket.ticket").update({
    where: where,
    data: data,
    populate: true,
  });
};

const deleteTicket = async (strapi, where) => {
  return await strapi.db.query("api::ticket.ticket").delete({
    where: where,
  });
};

module.exports = {
  findManyTickets,
  findWithCountTickets,
  findOneTicket,
  createTicket,
  updateTicket,
  deleteTicket,
};
