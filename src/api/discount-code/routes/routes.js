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
    // ------------------------------------------------------
  ],
};
