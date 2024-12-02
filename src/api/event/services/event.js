"use strict";

const moment = require("moment");

const { findPageEvent } = require("./services");

const { fetchTicketTypes } = require("../../ticket-type/services/services");

/**
 * discount service
 */

const formatDataEvent = async (strapi, event) => {
  // Obtener tipos de tickets
  const ticketTypes = await fetchTicketTypes(strapi, {
    event_id: event.id,
    end_date: {
      $gte: moment().format("YYYY-MM-DD HH:mm:ss"),
    },
  });

  // Calcular valores mínimo y máximo
  const { minValue, maxValue } = minMaxValues(ticketTypes);
  event.minValue = minValue;
  event.maxValue = maxValue;

  return {
    ...event,
    ticketType: ticketTypes,
  };
};

const minMaxValues = (validTickets) => {
  const prices = validTickets.map((ticket) => ticket.price);
  const minValue = prices.length > 0 ? Math.min(...prices) : 0;
  const maxValue = prices.length > 0 ? Math.max(...prices) : 0;
  return {
    minValue,
    maxValue: maxValue === minValue ? 0 : maxValue,
  };
};

const { createCoreService } = require("@strapi/strapi").factories;

const apiEvent = "api::event.event";
module.exports = createCoreService(apiEvent, ({ strapi }) => ({
  // GETS
  async getEventList(ctx) {
    try {
      const { query } = ctx;
      const { page, size } = query;

      const events = await findPageEvent(
        strapi,
        {
          end_date: {
            $gte: moment().format("YYYY-MM-DD HH:mm:ss"),
          },
        },
        { page, pageSize: size }
      );

      const results = await Promise.all(
        events.results.map(async (event) => {
          const formattedEvent = await formatDataEvent(strapi, event);
          return { ...event, ...formattedEvent };
        })
      );

      return {
        data: results,
        pagination: events.pagination,
        message: "",
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: error.message || "An error occurred while fetching the events",
      };
    }
  },
  // -------------------------------------------------------------
}));
