const moment = require("moment");

const numberFormat = (number) => {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(number);
};

const formHour = (hour) => {
  return moment(hour, "HH:mm").format("hh:mm a");
};

const ticketEmail = (ticket) => {
  return `
    <!DOCTYPE html>
<html ⚡4email data-css-strict>
  <head>
    <meta charset="utf-8" />

    <style amp-custom>
      body {
        width: 100%;
        font-family: roboto, "helvetica neue", helvetica, arial, sans-serif;
      }
      table {
        /* border-collapse: collapse; */
        border-spacing: 0px;
      }
      table td,
      body,
      .es-wrapper {
        padding: 0;
        margin: 0;
      }
      .es-content,
      .es-header,
      .es-footer {
        /* table-layout: fixed; */
        width: 100%;
      }
      p,
      hr {
        margin: 0;
      }
      h1,
      h2,
      h3,
      h4,
      h5 {
        margin: 0;
        line-height: 120%;
        font-family: roboto, "helvetica neue", helvetica, arial, sans-serif;
      }
      .es-left {
        float: left;
      }
      .es-right {
        float: right;
      }
      .es-p5 {
        padding: 5px;
      }
      .es-p5t {
        padding-top: 5px;
      }
      .es-p5b {
        padding-bottom: 5px;
      }
      .es-p5l {
        padding-left: 5px;
      }
      .es-p5r {
        padding-right: 5px;
      }
      .es-p10 {
        padding: 10px;
      }
      .es-p10t {
        padding-top: 10px;
      }
      .es-p10b {
        padding-bottom: 10px;
      }
      .es-p10l {
        padding-left: 10px;
      }
      .es-p10r {
        padding-right: 10px;
      }
      .es-p15 {
        padding: 15px;
      }
      .es-p15t {
        padding-top: 15px;
      }
      .es-p15b {
        padding-bottom: 15px;
      }
      .es-p15l {
        padding-left: 15px;
      }
      .es-p15r {
        padding-right: 15px;
      }
      .es-p20 {
        padding: 20px;
      }
      .es-p20t {
        padding-top: 20px;
      }
      .es-p20b {
        padding-bottom: 20px;
      }
      .es-p20l {
        padding-left: 20px;
      }
      .es-p20r {
        padding-right: 20px;
      }
      .es-p25 {
        padding: 25px;
      }
      .es-p25t {
        padding-top: 25px;
      }
      .es-p25b {
        padding-bottom: 25px;
      }
      .es-p25l {
        padding-left: 25px;
      }
      .es-p25r {
        padding-right: 25px;
      }
      .es-p30 {
        padding: 30px;
      }
      .es-p30t {
        padding-top: 30px;
      }
      .es-p30b {
        padding-bottom: 30px;
      }
      .es-p30l {
        padding-left: 30px;
      }
      .es-p30r {
        padding-right: 30px;
      }
      .es-p35 {
        padding: 35px;
      }
      .es-p35t {
        padding-top: 35px;
      }
      .es-p35b {
        padding-bottom: 35px;
      }
      .es-p35l {
        padding-left: 35px;
      }
      .es-p35r {
        padding-right: 35px;
      }
      .es-p40 {
        padding: 40px;
      }
      .es-p40t {
        padding-top: 40px;
      }
      .es-p40b {
        padding-bottom: 40px;
      }
      .es-p40l {
        padding-left: 40px;
      }
      .es-p40r {
        padding-right: 40px;
      }
      .es-menu td {
        border: 0;
      }
      s {
        text-decoration: line-through;
      }
      p,
      ul li,
      ol li {
        font-family: roboto, "helvetica neue", helvetica, arial, sans-serif;
        line-height: 150%;
      }
      ul li,
      ol li {
        margin-bottom: 15px;
        margin-left: 0;
      }
      a {
        text-decoration: underline;
      }
      a.es-button,
      button.es-button {
        padding: 10px 20px 10px 20px;
        display: inline-block;
        background: #071f4f;
        border-radius: 5px;
        font-size: 16px;
        font-family: roboto, "helvetica neue", helvetica, arial, sans-serif;
        font-weight: normal;
        font-style: normal;
        line-height: 120%;
        color: #ffffff;
        text-decoration: none;
        width: auto;
        text-align: center;
      }

      @media only screen and (max-width: 600px) {
        a.es-button,
        button.es-button {
          font-size: 16px;
          display: block;
          border-left-width: 0px;
          border-right-width: 0px;
          padding-left: 0px;
          padding-right: 0px;
        }
        .adapt-img {
          width: 100%;
          height: auto;
        }
      }
    </style>
  </head>
  <body>
    <div dir="ltr" class="es-wrapper-color" lang="en">
      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
        <tr>
          <td valign="top">
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-header"
              align="center"
              style="background-position: left center"
            >
              <tr>
                <td align="center">
                  <table
                    class="es-header-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    width="600"
                  >
                    <tr>
                      <td class="es-p10t es-p10r es-p10l" align="left">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-left"
                          align="left"
                          width="100%"
                        >
                          <tr>
                            <td align="left">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td align="left" style="font-size: 0px">
                                    <a target="_blank" href="https://www.theeventjet.com"
                                      ><img
                                        class="adapt-img"
                                        src="https://www.theeventjet.com/assets/images/bg-black.png"
                                        alt
                                        style="display: block"
                                        width="204"
                                        height="23"
                                        layout="responsive"
                                    /></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-right"
                          align="right"
                          width="100%"
                        >
                          <tr>
                            <td align="left">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td align="right">
                                    <p style="line-height: 120%">E-Ticket</p>
                                    <p style="line-height: 120%">
                                      Booking ID - ${
                                        ticket?.order?.id_order || ""
                                      }
                                    </p>
                                    <p style="display: none; line-height: 120%">
                                      <br />
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td class="es-p20t es-p20b es-m-p0b" align="left">
                        <table cellspacing="0" cellpadding="0" width="100%">
                          <tr>
                            <td align="left">
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tr>
                                  <td align="center">
                                    <p
                                      style="line-height: 40px; font-size: 20px"
                                    >
                                      <strong>Your Booking is Confirmed</strong>
                                    </p>
                                    <p style="display: none; line-height: 200%">
                                      <br />
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
              width="100%"
            >
              <tr>
                <td align="center">
                  <table
                    class="es-content-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    width="600"
                  >
                    <tr>
                      <td>
                        <table style="border: 1px solid #ccc; width: 100%">
                          <tr>
                            <td
                              class="es-p5"
                              align="left"
                              style="width: 30%; height: 160px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                style="width: 100%"
                              >
                                <tr>
                                  <td class="es-m-p20b" align="left">
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                    >
                                      <tr>
                                        <td align="center">
                                          <img
                                            src="${ticket?.event?.image || ""}"
                                            alt=""
                                            style="width: 100%; height: 160px"
                                          />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td style="width: 70%; padding: 0px 10px">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                style="width: 100%"
                              >
                                <tr>
                                  <td align="left">
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                    >
                                      <tr>
                                        <td align="left">
                                          <p
                                            style="
                                              font-size: 20px;
                                              margin-bottom: 10px;
                                            "
                                          >
                                            <strong
                                              >${
                                                ticket?.event?.event_name
                                              }</strong
                                            >
                                          </p>
                                          <p style="font-size: 14px">
                                            ${moment(
                                              ticket?.event?.event_date
                                            ).format("MMMM DD, YYYY")}
                                          </p>
                                          <p style="font-size: 14px">
                                            ${formHour(
                                              ticket?.event?.door_time
                                            )} - ${formHour(
    ticket?.event?.end_time
  )}
                                          </p>
                                          <p style="font-size: 14px">
                                            ${ticket?.event?.location_comp}
                                          </p>
                                          <p style="font-size: 14px">
                                            Age Restriction: ${
                                              ticket?.event?.age_restriction
                                            }
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="padding-top: 20px; padding-bottom: 10px"
                      >
                        <table cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td width="600" align="center" valign="top">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td align="left">
                                    <p style="font-size: 20px">
                                      <strong>Order Summary</strong>
                                    </p>
                                    <p style="display: none"><br /></p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    ${ticket?.tickets
                      ?.map((res) => {
                        return `
                        <tr>
                          <td align="left">
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              class="es-left"
                              align="left"
                              style="width: 50%"
                            >
                              <tr>
                                <td class="es-m-p20b" align="left">
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                  >
                                    <tr>
                                      <td align="left">
                                        <p>${res.name}</p>
                                        <p style="display: none">
                                          <br />
                                        </p>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              class="es-right"
                              align="right"
                              style="width: 50%"
                            >
                              <tr>
                                <td align="left">
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                  >
                                    <tr>
                                      <td align="right">
                                        <p>
                                          <span style="font-size: 14px">${
                                            res.amount
                                          }x</span>
                                          <span style="color: #cf0032"
                                            ><strong>$${numberFormat(
                                              res.price
                                            )}</strong></span
                                          >
                                        </p>
                                        <p style="display: none">
                                          <br />
                                        </p>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>`;
                      })
                      .join("")}
                    <tr>
                      <td>
                        <div
                          style="
                            border-bottom: 1px solid #615e9b;
                            margin-bottom: 10px;
                            padding-bottom: 10px;
                            width: 100%;
                          "
                        >
                          <table style="width: 100%"></table>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td align="left">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-left"
                          align="left"
                          style="width: 50%"
                        >
                          <tr>
                            <td class="es-m-p20b" align="left">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td align="left">
                                    <p>Subtotal</p>
                                    <p style="display: none">
                                      <br />
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-right"
                          align="right"
                          style="width: 50%"
                        >
                          <tr>
                            <td align="left">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td align="right">
                                    <p style="color: #cf0032">
                                      <strong>$${numberFormat(
                                        ticket?.order?.price?.price
                                      )}</strong>
                                    </p>
                                    <p style="display: none">
                                      <br />
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td align="left">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-left"
                          align="left"
                          style="width: 50%"
                        >
                          <tr>
                            <td class="es-m-p20b" align="left">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td align="left">
                                    <p>Service Fees<br /></p>
                                    <p style="display: none">
                                      <br />
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-right"
                          align="right"
                          style="width: 50%"
                        >
                          <tr>
                            <td align="left">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td align="right">
                                    <p style="color: #cf0032">
                                      <strong>$${numberFormat(
                                        ticket?.order?.price?.profitMargin || 0
                                      )}</strong>
                                    </p>
                                    <p style="display: none">
                                      <br />
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td align="left">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-left"
                          align="left"
                          style="width: 50%"
                        >
                          <tr>
                            <td class="es-m-p20b" align="left">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td align="left">
                                    <p>Processing Fee<br /></p>
                                    <p style="display: none">
                                      <br />
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-right"
                          align="right"
                          style="width: 50%"
                        >
                          <tr>
                            <td align="left">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td align="right">
                                    <p style="color: #cf0032">
                                      <strong>$${numberFormat(
                                        ticket?.order?.price?.stripeFixed || 0
                                      )}</strong>
                                    </p>
                                    <p style="display: none">
                                      <br />
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div
                          style="
                            border-bottom: 1px solid #615e9b;
                            margin-bottom: 10px;
                            padding-bottom: 10px;
                            width: 100%;
                          "
                        >
                          <table style="width: 100%"></table>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td align="left">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-left"
                          align="left"
                          style="width: 50%"
                        >
                          <tr>
                            <td class="es-m-p20b" align="left">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td align="left">
                                    <p style="font-size: 18px">Total</p>
                                    <p style="display: none"><br /></p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-right"
                          align="right"
                          style="width: 50%"
                        >
                          <tr>
                            <td align="left">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td align="right">
                                    <p style="color: #cf0032; font-size: 20px">
                                      <strong>$${numberFormat(
                                        ticket?.order?.total_price || 0
                                      )}</strong>
                                    </p>
                                    <p style="display: none"><br /></p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="padding: 10px 0px">
                        <table cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td width="600" align="center" valign="top">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td align="center">
                                    <span
                                      class=""
                                      style="
                                        background: #cf0032;
                                        border-radius: 18px;
                                      "
                                      ><a
                                        href="https://www.theeventjet.com/#/tickets/${
                                          ticket.order.id_order
                                        }"
                                        class="es-button es-button-1722735433639"
                                        target="_blank"
                                        style="
                                          background: #000000;
                                          border-radius: 18px;
                                          padding: 10px 20px;
                                        "
                                        >View Order</a
                                      ></span
                                    >
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
            >
              <tr>
                <td align="center">
                  <table
                    class="es-content-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    width="600"
                  >
                    <tr>
                      <td
                        align="left"
                        style="padding-top: 10px; padding-bottom: 20px"
                      >
                        <table cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td width="600" align="left">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tr>
                                  <td
                                    style="
                                      font-size: 0;
                                      text-align: -webkit-center;
                                    "
                                    align="center"
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="es-table-not-adapt es-social"
                                      dir="ltr"
                                    >
                                      <tr>
                                        <td
                                          align="center"
                                          valign="top"
                                          class="es-p10r"
                                        >
                                          <a
                                            target="_blank"
                                            href="https://api.whatsapp.com/send?phone=18136250599"
                                            ><img
                                              src="https://stripo.email/static/assets/img/messenger-icons/logo-colored-bordered/whatsapp-logo-colored-bordered.png"
                                              alt="Whatsapp"
                                              title="Whatsapp"
                                              width="32"
                                              height="32"
                                          /></a>
                                        </td>
                                        <td align="center" valign="top">
                                          <a
                                            target="_blank"
                                            href="https://www.instagram.com/theeventjet?igsh=MXJrYWxoZTJ5M2sydw=="
                                            ><img
                                              src="https://enhsvvs.stripocdn.email/content/assets/img/social-icons/logo-colored-bordered/instagram-logo-colored-bordered.png"
                                              alt="Ig"
                                              title="Instagram"
                                              width="32"
                                              height="32"
                                          /></a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>

    `;
};

module.exports = ticketEmail;
