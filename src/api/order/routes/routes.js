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
    {
      method: "GET",
      path: "/order/getForwardMailOrder/:id",
      handler: "order.getForwardMailOrder",
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
    {
      method: "POST",
      path: "/order/postCreateFreeOrder",
      handler: "order.postCreateFreeOrder",
    },
    // -------------------------------------------------------------
  ],
};
