const createTicketSalesPeriod = async (strapi, data = {}) => {
  return await strapi.db
    .query("api::ticket-sales-period.ticket-sales-period")
    .create({
      data,
    });
};

module.exports = {
  createTicketSalesPeriod,
};
