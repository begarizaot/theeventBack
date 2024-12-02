const fetchTicketTypes = async (strapi, where = {}) => {
  const ticketTypes = await strapi.db
    .query("api::ticket-type.ticket-type")
    .findMany({
      where: { ...where },
      filters: { publishedAt: { $null: false } },
    });
  return ticketTypes;
};

module.exports = {
  fetchTicketTypes,
};
