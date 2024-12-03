"use strict";

const findManyTicket = async (where = {}) => {
  return strapi.db.query("api::ticket.ticket").findMany({
    where: { ...where, publishedAt: { $null: false } },
    populate: {
      ticket_type_id: {
        select: ["id", "name", "price"],
      },
    },
  });
};

const createTicket = async (data) => {
  return strapi.db.query("api::ticket.ticket").create({
    data: { ...data, publishedAt: new Date() },
  });
};

const updateTicket = async (where, data) => {
  return strapi.db.query("api::ticket.ticket").update({
    where: where,
    data: data,
  });
};

module.exports = {
  createTicket,
  updateTicket,
  findManyTicket,
};
