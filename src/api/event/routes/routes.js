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
      path: "/event/getEventAnalytics/:id",
      handler: "event.getEventAnalytics",
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
    // -------------------------------------------------------------
  ],
};
