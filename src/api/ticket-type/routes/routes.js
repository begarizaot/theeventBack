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
    // POST
    {
      method: "POST",
      path: "/ticket-type/postValidateTicketEvent/:id",
      handler: "ticket-type.postValidateTicketEvent",
      config: {
        auth: false,
      },
    },
    // -------------------------------------------------------------
  ],
};
