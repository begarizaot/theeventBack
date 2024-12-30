module.exports = {
  routes: [
    // GET
    {
      method: "GET",
      path: "/event/getEventList",
      handler: "event.getEventList",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/event/getEventSearch",
      handler: "event.getEventSearch",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/event/getEventDetail/:id",
      handler: "event.getEventDetail",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/event/getMyEventList",
      handler: "event.getMyEventList",
    },
    {
      method: "GET",
      path: "/event/getEventSharedList",
      handler: "event.getEventSharedList",
    },
    {
      method: "GET",
      path: "/event/getEventTicketControls/:id",
      handler: "event.getEventTicketControls",
    },
    {
      method: "GET",
      path: "/event/getEventFreeTiekcts/:id",
      handler: "event.getEventFreeTiekcts",
    },
    {
      method: "GET",
      path: "/event/getEventDiscountCode/:id",
      handler: "event.getEventDiscountCode",
    },
    {
      method: "GET",
      path: "/event/getEventScanner/:idEvent/:idOrder",
      handler: "event.getEventScanner",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/event/getEventScannerCreate/:idEvent/:idOrder",
      handler: "event.getEventScannerCreate",
    },
    // -------------------------------------------------------------
    // POST
    {
      method: "POST",
      path: "/event/postCreateEvent",
      handler: "event.postCreateEvent",
    },
    // -------------------------------------------------------------
    // PUT
    {
      method: "PUT",
      path: "/event/putUpdateEventImage/:id",
      handler: "event.putUpdateEventImage",
    },
    {
      method: "PUT",
      path: "/event/putUpdateEvent/:id",
      handler: "event.putUpdateEvent",
    },
    // -------------------------------------------------------------
  ],
};
