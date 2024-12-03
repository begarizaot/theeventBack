module.exports = {
  routes: [
    // GET
    {
      method: "GET",
      path: "/order/getDowloandOrder/:id",
      handler: "order.getDowloandOrder",
      config: {
        auth: false,
      },
    },
    // -------------------------------------------------------------

    // POST
    {
      method: "POST",
      path: "/order/postCreatePayment",
      handler: "order.postCreatePayment",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/order/postCreateOrder",
      handler: "order.postCreateOrder",
      config: {
        auth: false,
      },
    },
    // -------------------------------------------------------------
  ],
};
