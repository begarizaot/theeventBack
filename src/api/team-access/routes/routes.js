module.exports = {
  // POST
  routes: [
    {
      method: "GET",
      path: "/team-access/getTeamAccessList/:id",
      handler: "team-access.getTeamAccessList",
    },
    // -------------------------------------------------------------

    // POST
    {
      method: "POST",
      path: "/team-access/postCreateTeamAccess/:id",
      handler: "team-access.postCreateTeamAccess",
    },
    // -------------------------------------------------------------

    // PUT
    {
      method: "PUT",
      path: "/team-access/putUpdateTeamAccess/:id",
      handler: "team-access.putUpdateTeamAccess",
    },
    // -------------------------------------------------------------

    // DELETE
    {
      method: "DELETE",
      path: "/team-access/delRemoveTeamAccess/:id/:teamId",
      handler: "team-access.delRemoveTeamAccess",
    },
    // -------------------------------------------------------------
  ],
};
