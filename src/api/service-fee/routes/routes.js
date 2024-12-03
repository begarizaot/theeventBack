module.exports = {
  routes: [
    {
      method: "GET",
      path: "/service-fee/getServiceFee",
      handler: "service-fee.getServiceFee",
      config: {
        auth: false,
      },
    },
  ],
};
