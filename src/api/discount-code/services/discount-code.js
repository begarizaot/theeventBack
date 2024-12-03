"use strict";

const { findOneDiscountCode } = require("./services");
const { findOneEvent } = require("../../event/services/services");

/**
 * discount service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::discount-code.discount-code",
  ({ strapi }) => ({
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

        if (discountCode?.amount > 0) {
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
  })
);
