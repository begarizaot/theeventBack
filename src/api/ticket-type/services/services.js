"use strict";

const findManyTicketTypes = async (where = {}) => {
  return strapi.db.query("api::ticket-type.ticket-type").findMany({
    where: { ...where },
    filters: { publishedAt: { $null: false } },
    orderBy: { price: "asc" },
  });
};

const findOneEventTicketTypes = async (where = {}) => {
  return strapi.db.query("api::ticket-type.ticket-type").findOne({
    where: {
      ...where,
      publishedAt: {
        $null: false,
      },
    },
  });
};

const createManyTicketTypes = async (data = []) => {
  return strapi.query("api::ticket-type.ticket-type").createMany({
    data: data.map((item) => ({ ...item, publishedAt: new Date() })),
  });
};

const createTicketTypes = async (data = []) => {
  return strapi.query("api::ticket-type.ticket-type").create({
    data: { ...data, publishedAt: new Date() },
  });
};

const updateTicketTypes = async (where = {}, data = []) => {
  return strapi.query("api::ticket-type.ticket-type").update({
    data: data,
    where: { ...where },
  });
};

const deleteTicketTypes = async (where = {}, data = []) => {
  return strapi.query("api::ticket-type.ticket-type").delete({
    where: where,
  });
};

module.exports = {
  findManyTicketTypes,
  findOneEventTicketTypes,
  createManyTicketTypes,
  createTicketTypes,
  updateTicketTypes,
  deleteTicketTypes,
};
