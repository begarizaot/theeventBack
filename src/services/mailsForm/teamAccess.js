const moment = require("moment");

const formHour = (hour) => {
  return moment(hour).format("hh:mm a");
};

const teamAccess = (data) => {
  const { events, team_type_role_id } = data;

  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html
        data-editor-version="2"
        class="sg-campaigns"
        xmlns="http://www.w3.org/1999/xhtml"
        >
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
            />
            <!--[if !mso]><!-->
            <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
            <!--<![endif]-->
            <!--[if (gte mso 9)|(IE)]>
            <xml>
                <o:OfficeDocumentSettings>
                <o:AllowPNG />
                <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
            <!--[if (gte mso 9)|(IE)]>
            <style type="text/css">
                body {
                width: 600px;
                margin: 0 auto;
                }
                table {
                border-collapse: collapse;
                }
                table,
                td {
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                }
                img {
                -ms-interpolation-mode: bicubic;
                }
            </style>
            <![endif]-->
            <style type="text/css">
            body,
            p,
            div {
                font-family: arial, helvetica, sans-serif;
                font-size: 14px;
            }
            body {
                color: #000000;
            }
            body a {
                color: #1188e6;
                text-decoration: none;
            }
            p {
                margin: 0;
                padding: 0;
            }
            table.wrapper {
                width: 100% !important;
                table-layout: fixed;
                -webkit-font-smoothing: antialiased;
                -webkit-text-size-adjust: 100%;
                -moz-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
            }
            img.max-width {
                max-width: 100% !important;
            }
            .column.of-2 {
                width: 50%;
            }
            .column.of-3 {
                width: 33.333%;
            }
            .column.of-4 {
                width: 25%;
            }
            ul ul ul ul {
                list-style-type: disc !important;
            }
            ol ol {
                list-style-type: lower-roman !important;
            }
            ol ol ol {
                list-style-type: lower-latin !important;
            }
            ol ol ol ol {
                list-style-type: decimal !important;
            }
            @media screen and (max-width: 480px) {
                .preheader .rightColumnContent,
                .footer .rightColumnContent {
                text-align: left !important;
                }
                .preheader .rightColumnContent div,
                .preheader .rightColumnContent span,
                .footer .rightColumnContent div,
                .footer .rightColumnContent span {
                text-align: left !important;
                }
                .preheader .rightColumnContent,
                .preheader .leftColumnContent {
                font-size: 80% !important;
                padding: 5px 0;
                }
                table.wrapper-mobile {
                width: 100% !important;
                table-layout: fixed;
                }
                img.max-width {
                height: auto !important;
                max-width: 100% !important;
                }
                a.bulletproof-button {
                display: block !important;
                width: auto !important;
                font-size: 80%;
                padding-left: 0 !important;
                padding-right: 0 !important;
                }
                .columns {
                width: 100% !important;
                }
                .column {
                display: block !important;
                width: 100% !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
                }
                .social-icon-column {
                display: inline-block !important;
                }
            }
            </style>
            <!--user entered Head Start-->
            <!--End Head user entered-->
        </head>
        <body>
            <center
            class="wrapper"
            data-link-color="#1188E6"
            data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#FFFFFF;"
            >
            <div class="webkit">
                <table
                cellpadding="0"
                cellspacing="0"
                border="0"
                width="100%"
                class="wrapper"
                bgcolor="#FFFFFF"
                >
                <tr>
                    <td valign="top" bgcolor="#FFFFFF" width="100%">
                    <table
                        width="100%"
                        role="content-container"
                        class="outer"
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                    >
                        <tr>
                        <td width="100%">
                            <table
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            >
                            <tr>
                                <td>
                                <!--[if mso]>
            <center>
            <table><tr><td width="600">
        <![endif]-->
                                <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    style="width: 100%; max-width: 600px"
                                    align="center"
                                >
                                    <tr>
                                    <td
                                        role="modules-container"
                                        style="
                                        padding: 0px 0px 0px 0px;
                                        color: #000000;
                                        text-align: left;
                                        "
                                        bgcolor="#FFFFFF"
                                        width="100%"
                                        align="left"
                                    >
                                        <table
                                        class="module preheader preheader-hide"
                                        role="module"
                                        data-type="preheader"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="
                                            display: none !important;
                                            mso-hide: all;
                                            visibility: hidden;
                                            opacity: 0;
                                            color: transparent;
                                            height: 0;
                                            width: 0;
                                        "
                                        >
                                        <tr>
                                            <td role="module-content">
                                            <p></p>
                                            </td>
                                        </tr>
                                        </table>
                                        <table
                                        class="wrapper"
                                        role="module"
                                        data-type="image"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="table-layout: fixed"
                                        data-muid="3f202cb8-493b-4b6e-be61-e88634c8ff8c"
                                        >
                                        <tbody>
                                            <tr>
                                            <td
                                                style="
                                                font-size: 6px;
                                                line-height: 10px;
                                                padding: 20px 0px 0px 0px;
                                                "
                                                valign="top"
                                                align="left"
                                            >
                                                <a href="https://www.theeventjet.com">
                                                <img
                                                    class="max-width"
                                                    border="0"
                                                    style="
                                                    display: block;
                                                    color: #000000;
                                                    text-decoration: none;
                                                    font-family: Helvetica, arial,
                                                        sans-serif;
                                                    font-size: 16px;
                                                    max-width: 50% !important;
                                                    width: 50%;
                                                    height: auto !important;
                                                    "
                                                    width="300"
                                                    alt=""
                                                    data-proportionally-constrained="true"
                                                    data-responsive="true"
                                                    src="http://cdn.mcauto-images-production.sendgrid.net/8be1cd06249b7f14/a8794cb5-fc1b-4fc1-bd53-5d506ef83684/1195x137.png"
                                                />
                                                </a>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                        <table
                                        class="module"
                                        role="module"
                                        data-type="text"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="table-layout: fixed"
                                        data-muid="2f878ad4-3a1a-4ea2-8a71-c60b81e31dac"
                                        data-mc-module-version="2019-10-22"
                                        >
                                        <tbody>
                                            <tr>
                                            <td
                                                style="
                                                padding: 0px 0px 0px 0px;
                                                line-height: 0px;
                                                text-align: inherit;
                                                "
                                                height="100%"
                                                valign="top"
                                                bgcolor=""
                                                role="module-content"
                                            >
                                                <div>
                                                <h3 style="text-align: center">
                                                    <strong
                                                    >Team Access</strong
                                                    >
                                                </h3>
                                                <div></div>
                                                </div>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                        <table
                                        class="module"
                                        role="module"
                                        data-type="text"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="table-layout: fixed"
                                        data-muid="2f878ad4-3a1a-4ea2-8a71-c60b81e31dac"
                                        data-mc-module-version="2019-10-22"
                                        >
                                        <tbody>
                                            <tr>
                                            <td
                                                style="
                                                padding: 5px 0px 15px 0px;
                                                line-height: 0px;
                                                text-align: inherit;
                                                "
                                                height="100%"
                                                valign="top"
                                                bgcolor=""
                                                role="module-content"
                                            >
                                                <div>
                                                <p style="text-align: center">
                                                    you have been assigned to the team as event : ${
                                                      team_type_role_id?.name ||
                                                      ""
                                                    }
                                                </p>
                                                <div></div>
                                                </div>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                        <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        align="center"
                                        width="100%"
                                        role="module"
                                        data-type="columns"
                                        style="padding: 5px 0px 5px 0px"
                                        bgcolor="#FFFFFF"
                                        data-distribution="1,3"
                                        >
                                        <tbody>
                                            <tr role="module-content">
                                            <td
                                                height="100%"
                                                valign="top"
                                                style="
                                                border: 1px solid #ccc;
                                                padding: 5px;
                                                "
                                            >
                                                <table
                                                width="125"
                                                style="
                                                    width: 125px;
                                                    border-spacing: 0;
                                                    border-collapse: collapse;
                                                    margin: 0px 10px 0px 0px;
                                                "
                                                cellpadding="0"
                                                cellspacing="0"
                                                align="left"
                                                border="0"
                                                bgcolor=""
                                                class="column column-0"
                                                >
                                                <tbody>
                                                    <tr>
                                                    <td
                                                        style="
                                                        padding: 0px;
                                                        margin: 0px;
                                                        border-spacing: 0;
                                                        "
                                                    >
                                                        <table
                                                        class="wrapper"
                                                        role="module"
                                                        data-type="image"
                                                        border="0"
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        width="100%"
                                                        style="table-layout: fixed"
                                                        data-muid="cPFjgZvPFzLcZLtc26Lf64"
                                                        >
                                                        <tbody>
                                                            <tr>
                                                            <td
                                                                style="
                                                                font-size: 6px;
                                                                line-height: 10px;
                                                                padding: 0px 0px 0px
                                                                    0px;
                                                                "
                                                                valign="top"
                                                                align="center"
                                                            >
                                                                <img
                                                                class="max-width"
                                                                border="0"
                                                                style="
                                                                    display: block;
                                                                    color: #000000;
                                                                    text-decoration: none;
                                                                    font-family: Helvetica,
                                                                    arial, sans-serif;
                                                                    font-size: 16px;
                                                                    max-width: 100% !important;
                                                                    width: 100%;
                                                                    height: auto !important;
                                                                "
                                                                width="145"
                                                                alt=""
                                                                data-proportionally-constrained="true"
                                                                data-responsive="true"
                                                                src="${
                                                                  events?.image &&
                                                                  events
                                                                    .image[0]
                                                                    .url
                                                                }"
                                                                />
                                                            </td>
                                                            </tr>
                                                        </tbody>
                                                        </table>
                                                    </td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                                <table
                                                width="435"
                                                style="
                                                    width: 435px;
                                                    border-spacing: 0;
                                                    border-collapse: collapse;
                                                    margin: 0px 0px 0px 10px;
                                                "
                                                cellpadding="0"
                                                cellspacing="0"
                                                align="left"
                                                border="0"
                                                bgcolor=""
                                                class="column column-1"
                                                >
                                                <tbody>
                                                    <tr>
                                                    <td
                                                        style="
                                                        padding: 0px;
                                                        margin: 0px;
                                                        border-spacing: 0;
                                                        "
                                                    >
                                                        <table
                                                        class="module"
                                                        role="module"
                                                        data-type="text"
                                                        border="0"
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        width="100%"
                                                        style="table-layout: fixed"
                                                        data-muid="nQY5a77bmpraACcQYxAD6z"
                                                        data-mc-module-version="2019-10-22"
                                                        >
                                                        <tbody>
                                                            <tr>
                                                            <td
                                                                style="
                                                                padding: 12px 0px 0px
                                                                    0px;
                                                                line-height: 2px;
                                                                text-align: inherit;
                                                                "
                                                                height="100%"
                                                                valign="top"
                                                                bgcolor=""
                                                                role="module-content"
                                                            >
                                                                <div>
                                                                <h3
                                                                    style="
                                                                    text-align: inherit;
                                                                    "
                                                                >
                                                                    <strong
                                                                    >${
                                                                      events?.event_name ||
                                                                      ""
                                                                    }</strong
                                                                    >
                                                                </h3>

                                                                <div
                                                                    style="
                                                                    font-family: inherit;
                                                                    text-align: inherit;
                                                                    "
                                                                >
                                                                    <span
                                                                    style="
                                                                        line-height: 14px;
                                                                        color: #222222;
                                                                        font-style: normal;
                                                                        font-weight: 400;
                                                                        font-size: 12px;
                                                                        font-weight: 400;
                                                                        letter-spacing: normal;
                                                                    "
                                                                    >${moment(
                                                                      events?.start_date ||
                                                                        ""
                                                                    ).format(
                                                                      "MMMM DD, YYYY"
                                                                    )}</span
                                                                    >
                                                                </div>
                                                                <div
                                                                    style="
                                                                    font-family: inherit;
                                                                    text-align: -webkit-left;
                                                                    "
                                                                >
                                                                    <span
                                                                    style="
                                                                        line-height: 14px;
                                                                        color: #222222;
                                                                        font-style: normal;
                                                                        font-weight: 400;
                                                                        font-size: 12px;
                                                                        font-weight: 400;
                                                                        letter-spacing: normal;
                                                                    "
                                                                    >${formHour(
                                                                      events?.start_date ||
                                                                        ""
                                                                    )} - ${formHour(
    events?.end_date || ""
  )}</span
                                                                    >
                                                                </div>
                                                                <div
                                                                    style="
                                                                    font-family: inherit;
                                                                    text-align: -webkit-left;
                                                                    "
                                                                >
                                                                    <span
                                                                    style="
                                                                        line-height: 14px;
                                                                        color: #222222;
                                                                        font-style: normal;
                                                                        font-weight: 400;
                                                                        font-size: 12px;
                                                                        font-weight: 400;
                                                                        letter-spacing: normal;
                                                                    "
                                                                    >${
                                                                      events
                                                                        ?.map_id
                                                                        ?.labelCompl ||
                                                                      ""
                                                                    }</span
                                                                    >
                                                                </div>
                                                                <div
                                                                    style="
                                                                    font-family: inherit;
                                                                    text-align: -webkit-left;
                                                                    "
                                                                >
                                                                    <span
                                                                    style="
                                                                        line-height: 14px;
                                                                        color: #222222;
                                                                        font-style: normal;
                                                                        font-weight: 400;
                                                                        font-size: 12px;
                                                                        font-weight: 400;
                                                                        letter-spacing: normal;
                                                                    "
                                                                    >Age Restriction:
                                                                    ${
                                                                      events
                                                                        ?.event_age_restriction_id
                                                                        ?.name ||
                                                                      ""
                                                                    }</span
                                                                    >
                                                                </div>
                                                                <div></div>
                                                                </div>
                                                            </td>
                                                            </tr>
                                                        </tbody>
                                                        </table>
                                                    </td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                        </table>
                                        <table
                                        class="module"
                                        role="module"
                                        data-type="social"
                                        align="center"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="table-layout: fixed"
                                        data-muid="45026be8-7360-409e-a888-b04a646b24d0"
                                        >
                                        <tbody>
                                            <tr>
                                            <td
                                                valign="top"
                                                style="
                                                padding: 6px 0px 0px 0px;
                                                font-size: 6px;
                                                line-height: 10px;
                                                "
                                                align="center"
                                            >
                                                <table
                                                align="center"
                                                style="
                                                    -webkit-margin-start: auto;
                                                    -webkit-margin-end: auto;
                                                "
                                                >
                                                <tbody>
                                                    <tr align="center">
                                                    <td
                                                        style="padding: 0px 5px"
                                                        class="social-icon-column"
                                                    >
                                                        <a
                                                        role="social-icon-link"
                                                        href="https://api.whatsapp.com/send?phone=18136250599"
                                                        target="_blank"
                                                        >
                                                        <img
                                                            src="https://stripo.email/static/assets/img/messenger-icons/logo-colored-bordered/whatsapp-logo-colored-bordered.png"
                                                            alt="Whatsapp"
                                                            title="Whatsapp"
                                                            style="
                                                            height: 32px;
                                                            width: 32px;
                                                            "
                                                            height="32"
                                                            width="32"
                                                        />
                                                        </a>
                                                    </td>
                                                    <td
                                                        style="padding: 0px 5px"
                                                        class="social-icon-column"
                                                    >
                                                        <a
                                                        role="social-icon-link"
                                                        href="https://www.instagram.com/theeventjet?igsh=MXJrYWxoZTJ5M2sydw=="
                                                        target="_blank"
                                                        >
                                                        <img
                                                            role="social-icon"
                                                            alt="instagram"
                                                            src="https://enhsvvs.stripocdn.email/content/assets/img/social-icons/logo-colored-bordered/instagram-logo-colored-bordered.png"
                                                            style="
                                                            height: 32px;
                                                            width: 32px;
                                                            "
                                                            height="32"
                                                            width="32"
                                                        />
                                                        </a>
                                                    </td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </td>
                                    </tr>
                                </table>
                                <!--[if mso]>
                                        </td>
                                        </tr>
                                    </table>
                                    </center>
                                    <![endif]-->
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
            </center>
        </body>
        </html>
`;
};

module.exports = teamAccess;
