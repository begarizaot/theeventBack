const fetchTicketTypes = async (strapi, eventId) => {
  // Obtener tipos de tickets relacionados con el evento
  const ticketTypes = await strapi.db
    .query("api::ticket-type.ticket-type")
    .findMany({
      where: { event_id: eventId },
      filters: { publishedAt: { $null: false } },
      populate: { ticket_sales_period_id: true },
    });

  return ticketTypes.map((ticket) => {
    const { start_date, start_time, end_date, end_time } =
      ticket.ticket_sales_period_id || {};
    return {
      ...ticket,
      end_time: `${end_date} ${end_time}`,
      start_time: `${start_date} ${start_time}`,
    };
  });
};

const ticketsTypesAmount = async (strapi, eventId, tickets) => {
  // Buscar los tipos de boletos para el evento especificado y obtener la información de los periodos de venta
  const ticketTypes = await strapi
    .query("api::ticket-type.ticket-type")
    .findMany({
      where: { event_id: eventId },
      populate: { ticket_sales_period_id: true },
    });

  // Verificar si algún boleto en `tickets` excede su capacidad máxima
  const exceedsCapacity = ticketTypes.some(
    (type, index) =>
      tickets[index]?.id === type.id &&
      tickets[index].amount > type.max_capacity
  );

  return { sinTicket: exceedsCapacity, ticketTypes };
};

const findManyTicketTypes = async (strapi, where = {}) => {
  return await strapi.db.query("api::ticket-type.ticket-type").findMany({
    where: {
      ...where,
      publishedAt: {
        $null: false,
      },
    },
  });
};

const createManyTicketTypes = async (strapi, data) => {
  return await strapi.db.query("api::ticket-type.ticket-type").createMany({
    data,
  });
};

const updateTicketType = async (strapi, where = {}, data = {}) => {
  return await strapi.db.query("api::ticket-type.ticket-type").update({
    data,
    where,
  });
};

module.exports = {
  fetchTicketTypes,
  ticketsTypesAmount,
  findManyTicketTypes,
  updateTicketType,
  createManyTicketTypes,
};
