module.exports = {
  routes: [
    {
      method: "GET",
      path: "/team-type-role/getTeamTypeRoles",
      handler: "team-type-role.getTeamTypeRoles",
      config: {
        auth: false,
      },
    },
  ],
};
