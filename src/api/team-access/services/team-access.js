"use strict";

const { teamAccessEmail } = require("../../../services/mailsForm");

const { encrypt } = require("../../../services/crypto");
const { validateOrCreateUser } = require("../../auth/services/services");

const {
  createTeamAccess,
  updateTeamAccess,
  findOneTeamAccess,
  findManyTeamAccess,
  deleteTeamAccess,
} = require("./services");
const { findOneEvent } = require("../../event/services/services");
const { validateEmail, mailSend } = require("../../../services/mails");

/**
 * team-access service
 */

const { createCoreService } = require("@strapi/strapi").factories;

const table = "api::team-access.team-access";
module.exports = createCoreService(table, ({}) => ({
  // GET
  async getTeamAccessList(ctx) {
    try {
      const { user, params } = ctx;
      const { id } = params;

      const event = await findOneEvent({ id_event: id });
      if (!event) {
        return {
          status: false,
          data: null,
          message: "Event not found",
        };
      }

      if (event?.organizer_id?.id != user.id) {
        return {
          status: false,
          data: null,
          message: "You are not the owner of the event",
        };
      }

      const teamAccessReq = await findManyTeamAccess({
        event_id: event.id,
      });

      if (!teamAccessReq) {
        return {
          status: false,
          data: null,
          message: "No team access found",
        };
      }

      return {
        data: teamAccessReq,
        message: "",
        status: true,
      };
    } catch (e) {
      console.log(e);
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the team access",
      };
    }
  },
  // -------------------------------------------------------------
  // POST
  async postCreateTeamAccess(ctx) {
    try {
      const { body, user, params } = ctx;
      const { id } = params;

      const emailVal = await validateEmail(body.email);
      if (!emailVal.status || emailVal.data != "Valid") {
        return {
          status: false,
          data: null,
          message: "Verify your email not valid",
        };
      }

      const event = await findOneEvent({ id_event: id });
      if (!event) {
        return {
          status: false,
          data: null,
          message: "Event not found",
        };
      }

      if (event?.organizer_id?.id != user.id) {
        return {
          status: false,
          data: null,
          message: "You are not the owner of the event",
        };
      }

      if (event?.organizer_id?.email == body.email) {
        return {
          status: false,
          data: null,
          message: "You are the owner of the event",
        };
      }

      const dataUser = await validateOrCreateUser(body);

      const teamAccessReq = await findOneTeamAccess({
        event_id: event.id,
        user_id: dataUser.id,
      });

      if (teamAccessReq) {
        return {
          status: false,
          data: null,
          message: "User already has access to the event",
        };
      }

      const teamAccess = await createTeamAccess({
        event_id: event.id,
        user_id: dataUser.id,
        team_type_role_id: body.team_type_role,
      });

      const encryptRes = encrypt(`teamAccessId_${teamAccess.id}`);

      const emailTeam = teamAccessEmail({
        ...event,
        team_type_role_id: teamAccess?.team_type_role_id,
      });

      mailSend({
        email: body.email,
        subject: `Team access to ${event.event_name}`,
        html: emailTeam,
      });

      updateTeamAccess({ id: teamAccess.id }, { id_teamAcces: encryptRes });

      return {
        data: teamAccess,
        message: "",
        status: true,
      };
    } catch (e) {
      console.log(e);
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the team access",
      };
    }
  },
  // -------------------------------------------------------------
  // PUT
  async putUpdateTeamAccess(ctx) {
    try {
      const { body, user, params } = ctx;
      const { id } = params;

      const event = await findOneEvent({ id_event: id });
      if (!event) {
        return {
          status: false,
          data: null,
          message: "Event not found",
        };
      }

      if (event?.organizer_id?.id != user.id) {
        return {
          status: false,
          data: null,
          message: "You are not the owner of the event",
        };
      }

      const teamAccessReq = await findOneTeamAccess({
        id_teamAcces: body.id || body.idTicket,
      });
      if (!teamAccessReq) {
        return {
          status: false,
          data: null,
          message: "Team access not found",
        };
      }

      const dataUpdate = {
        ...(body.team_type_role && { team_type_role_id: body.team_type_role }),
        ...(body.state && { state: body.state == 1 ? true : false }),
      };

      const teamAccess = await updateTeamAccess(
        { id: teamAccessReq.id },
        dataUpdate
      );

      return {
        data: teamAccess,
        message: "",
        status: true,
      };
    } catch (e) {
      console.log(e);
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the team access",
      };
    }
  },

  // -------------------------------------------------------------

  // DELETE
  async delRemoveTeamAccess(ctx) {
    try {
      const { user, params } = ctx;
      const { id, teamId } = params;

      const event = await findOneEvent({ id_event: id });
      if (!event) {
        return {
          status: false,
          data: null,
          message: "Event not found",
        };
      }

      if (event?.organizer_id?.id != user.id) {
        return {
          status: false,
          data: null,
          message: "You are not the owner of the event",
        };
      }

      const teamAccessReq = await findOneTeamAccess({
        id_teamAcces: teamId,
      });

      if (!teamAccessReq) {
        return {
          status: false,
          data: null,
          message: "Team access not found",
        };
      }

      const teamAccess = await deleteTeamAccess({
        id_teamAcces: teamId,
      });

      return {
        data: teamAccess,
        message: "",
        status: true,
      };
    } catch (e) {
      console.log(e);
      return {
        status: false,
        data: null,
        message: "An error occurred while fetching the team access",
      };
    }
  },

  // -------------------------------------------------------------
}));
