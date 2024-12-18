"use strict";

const { reduceElements } = require("../../../services/general");

const { findManyTicket } = require("./services");
const { findOneEvent } = require("../../event/services/services");
const {
  findPageOrder,
  findOneOrder,
} = require("../../order/services/services");

/**
 * ticket service
 */

const { createCoreService } = require("@strapi/strapi").factories;

const table = "api::ticket.ticket";
module.exports = createCoreService(table, ({ strapi }) => ({
  // GET
  async getListMyTicket(ctx) {
    try {
      const { user, query } = ctx;
      const { page, size } = query;

      const orders = await findPageOrder(
        { user_id: user.id },
        {
          page,
          pageSize: size,
        }
      );

      return {
        data: orders.results,
        pagination: orders.pagination,
        message: "",
        status: true,
      };
    } catch (error) {
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the tickets",
      };
    }
  },
  async getDetailMyTicket(ctx) {
    try {
      const { user, params } = ctx;

      const order = await findOneOrder({
        id_order: params.id,
        user_id: user.id,
      });
      if (!order?.id) {
        return {
          status: false,
          data: null,
          message: "Order not found",
        };
      }

      const event = await findOneEvent({ id: order.event_id.id });

      const tickets = await findManyTicket({ order_id: order.id });

      return {
        data: {
          ...order,
          event,
          tickets: reduceElements(
            tickets.map((ticket) => ({
              ...ticket.ticket_type_id,
              amount: 1,
            })),
            { elemen: "id" }
          ),
          listTickets: tickets,
        },
        message: "",
        status: true,
      };
    } catch (error) {
      console.log(error);
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the tickets",
      };
    }
  },
  // -------------------------------------------------------------
}));
