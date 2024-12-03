module.exports = {
  routes: [
    // GET
    {
      method: "GET",
      path: "/event-age-restriction/getListAgeRestriction",
      handler: "event-age-restriction.getListAgeRestriction",
      config: {
        auth: false,
      },
    },
    // -------------------------------------------------------------
  ],
};
