"use strict";

const {
  findOneDiscountCode,
  updateDiscountCode,
  createDiscountCode,
} = require("./services");
const { findOneEvent } = require("../../event/services/services");

/**
 * discount service
 */

const { createCoreService } = require("@strapi/strapi").factories;

const onValidateCode = async (ctx) => {
  return new Promise(async (resolve, reject) => {
    const { params, user } = ctx;
    const { id } = params;

    const event = await findOneEvent({ id_event: id });
    if (!event?.id) {
      return reject({ messageRes: "Event not found" });
    }
    if (event.organizer_id.id != user.id) {
      return reject({
        messageRes: "You are not authorized to perform this action",
      });
    }

    resolve(event);
  });
};

module.exports = createCoreService(
  "api::discount-code.discount-code",
  ({}) => ({
    // POST
    async postDiscountCodeEvent(ctx) {
      try {
        const { params, body } = ctx;

        const event = await findOneEvent({ id_event: params.id });
        const message = "Discount code is not valid";
        if (!event?.id) {
          return { data: null, message, status: false };
        }

        const discountCode = await findOneDiscountCode({
          name: body.code,
          event_id: event.id,
        });

        if (
          discountCode?.amount < discountCode?.amount_max &&
          !discountCode.disable
        ) {
          const newAmount =
            discountCode.state === "val"
              ? body.total - discountCode.value
              : Number(
                  (
                    body.total -
                    (body.total * discountCode.value) / 100
                  ).toFixed(2)
                );

          return {
            data: newAmount,
            desc: discountCode.state === "val" ? null : discountCode.value,
            message: "",
            status: true,
          };
        }

        return { data: 0, message, status: false };
      } catch (e) {
        return {
          status: false,
          data: null,
          message: "An error occurred while fetching the discount code",
        };
      }
    },
    async postDiscountCreateEvent(ctx) {
      try {
        const { body } = ctx;

        const event = await onValidateCode(ctx);

        const discountCode = await findOneDiscountCode(
          {
            name: { $containsi: body.name || "" },
            event_id: event.id,
          },
          true
        );

        if (discountCode?.id) {
          return {
            status: false,
            data: null,
            message: "Discount code already exists",
          };
        }

        await createDiscountCode({
          ...body,
          name: body.name.toLowerCase(),
          event_id: event.id,
          amount_max: body.amount,
        });

        return {
          status: true,
          data: {},
          message: "",
        };
      } catch (error) {
        return {
          status: false,
          data: null,
          message:
            error?.messageRes ||
            "An error occurred while fetching the discount code",
        };
      }
    },
    async postDiscountStatusEvent(ctx) {
      try {
        const { body } = ctx;

        const event = await onValidateCode(ctx);

        const discountCode = await findOneDiscountCode(
          {
            id: body.id,
            event_id: event.id,
          },
          true
        );

        if (!discountCode?.id) {
          return {
            status: true,
            data: null,
            message: "Discount code not found",
          };
        }

        await updateDiscountCode(
          { id: discountCode.id },
          { disable: body.disable }
        );

        return {
          status: true,
          data: codeDiscount,
          message: "",
        };
      } catch (error) {
        return {
          status: false,
          data: null,
          message:
            error?.messageRes ||
            "An error occurred while fetching the discount code",
        };
      }
    },
    // ------------------------------------------------------
    // PUTS
    async putDiscountEditEvent(ctx) {
      try {
        const { body } = ctx;

        const event = await onValidateCode(ctx);

        const discountCode = await findOneDiscountCode(
          {
            id: body.id,
            event_id: event.id,
          },
          true
        );

        if (!discountCode?.id) {
          return {
            status: false,
            data: null,
            message: "Discount code not found",
          };
        }

        const amount = body.amount - discountCode.amount;

        if (amount <= 0) {
          return {
            status: false,
            data: null,
            message: "Amount must be greater than the previous amount",
          };
        }

        const desData = {
          amount_max: body.amount,
          name: body.name,
          start_date: body.start_date,
          end_date: body.end_date,
        };

        await updateDiscountCode({ id: discountCode.id }, desData);

        return {
          status: true,
          data: {},
          message: "",
        };
      } catch (error) {
        return {
          status: false,
          data: null,
          message: "An error occurred while fetching the discount code",
        };
      }
    },
    // ------------------------------------------------------
  })
);
