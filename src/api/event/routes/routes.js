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
    // -------------------------------------------------------------
  ],
};
