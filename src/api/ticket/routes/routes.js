module.exports = {
  routes: [
    // GET
    {
      method: "GET",
      path: "/ticket/getListMyTicket",
      handler: "ticket.getListMyTicket",
    },
    {
      method: "GET",
      path: "/ticket/getDetailMyTicket/:id",
      handler: "ticket.getDetailMyTicket",
    },
    // -------------------------------------------------------------
  ],
};
