module.exports = {
  routes: [
    // GET
    {
      method: "GET",
      path: "/ticket-type/getListTicketTypeByEvent/:id",
      handler: "ticket-type.getListTicketTypeByEvent",
      config: {
        auth: false,
      },
    },
    // -------------------------------------------------------------
  ],
};
