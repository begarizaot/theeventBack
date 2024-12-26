module.exports = {
  routes: [
    // GET
    // ------------------------------------------------------
    // POST
    {
      method: "POST",
      path: "/discount-code/postDiscountCodeEvent/:id",
      handler: "discount-code.postDiscountCodeEvent",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/discount-code/postDiscountCreateEvent/:id",
      handler: "discount-code.postDiscountCreateEvent",
    },
    {
      method: "POST",
      path: "/discount-code/postDiscountStatusEvent/:id",
      handler: "discount-code.postDiscountStatusEvent",
    },
    // ------------------------------------------------------
    // PUTS
    {
      method: "PUT",
      path: "/discount-code/putDiscountEditEvent/:id",
      handler: "discount-code.putDiscountEditEvent",
    },
    // ------------------------------------------------------
  ],
};
