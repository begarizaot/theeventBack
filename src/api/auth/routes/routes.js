module.exports = {
  routes: [
    // POST
    {
      method: "POST",
      path: "/auth/postRegisterUser",
      handler: "auth.postRegisterUser",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/auth/postLoginUser",
      handler: "auth.postLoginUser",
      config: {
        policies: [],
        auth: false,
      },
    },
    // -------------------------------------------------------------
    // PUT
    {
      method: "PUT",
      path: "/auth/putUpdateUser",
      handler: "auth.putUpdateUser",
      config: {
        // policies: [],
        // auth: false,
      },
    },
  ],
};
