module.exports = {
  routes: [
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
    {
      method: "POST",
      path: "/auth/postForgotPasswordUser",
      handler: "auth.postForgotPasswordUser",
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
