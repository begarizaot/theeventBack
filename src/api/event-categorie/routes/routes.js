module.exports = {
  routes: [
    // GET
    {
      method: "GET",
      path: "/event-categorie/getListCategories",
      handler: "event-categorie.getListCategories",
      config: {
        auth: false,
      },
    },
    // -------------------------------------------------------------
  ],
};
