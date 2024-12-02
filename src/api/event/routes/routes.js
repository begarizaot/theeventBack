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
    // -------------------------------------------------------------
  ],
};
