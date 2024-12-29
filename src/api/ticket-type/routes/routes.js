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
    {
      method: "POST",
      path: "/ticket-type/postCreateTicketEvent/:id",
      handler: "ticket-type.postCreateTicketEvent",
    },
    // -------------------------------------------------------------
    // PUT
    {
      method: "PUT",
      path: "/ticket-type/putUpdateTicketEvent/:id",
      handler: "ticket-type.putUpdateTicketEvent",
    },
    // -------------------------------------------------------------
    // DELETE
    {
      method: "DELETE",
      path: "/ticket-type/deleteTicketEvent/:id/:id_ticket",
      handler: "ticket-type.deleteTicketEvent",
    },
    // -------------------------------------------------------------
  ],
};
