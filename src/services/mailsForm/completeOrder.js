const moment = require("moment");

const numberFormat = (number) => {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(number);
};

const formHour = (hour) => {
  return moment(hour).format("hh:mm a");
};

const completeOrder = (data) => {
  const { id_order, events, ticketsRedc, price, total_price } = data;

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
                                        data-muid="3bed1a3a-3d10-4750-94a4-80e198aa541d"
                                        data-mc-module-version="2019-10-22"
                                        >
                                        <tbody>
                                            <tr>
                                            <td
                                                style="
                                                padding: 0px 0px 5px 0px;
                                                line-height: 22px;
                                                text-align: inherit;
                                                "
                                                height="100%"
                                                valign="top"
                                                bgcolor=""
                                                role="module-content"
                                            >
                                                <div>
                                                <div
                                                    style="
                                                    font-family: inherit;
                                                    text-align: right;
                                                    "
                                                >
                                                    <span
                                                    style="
                                                        margin-top: 0px;
                                                        margin-right: 0px;
                                                        margin-bottom: 0px;
                                                        margin-left: 0px;
                                                        font-family: roboto,
                                                        'helvetica neue', helvetica,
                                                        arial, sans-serif;
                                                        line-height: 15.6px;
                                                        color: #222222;
                                                        font-size: small;
                                                        font-style: normal;
                                                        font-variant-ligatures: normal;
                                                        font-variant-caps: normal;
                                                        font-weight: 400;
                                                        letter-spacing: normal;
                                                        orphans: 2;
                                                        text-align: -webkit-right;
                                                        text-indent: 0px;
                                                        text-transform: none;
                                                        widows: 2;
                                                        word-spacing: 0px;
                                                        -webkit-text-stroke-width: 0px;
                                                        white-space-collapse: collapse;
                                                        text-wrap-mode: wrap;
                                                        background-color: rgb(
                                                        255,
                                                        255,
                                                        255
                                                        );
                                                        text-decoration-thickness: initial;
                                                        text-decoration-style: initial;
                                                        text-decoration-color: initial;
                                                    "
                                                    >
                                                    E-Ticket
                                                    </span>
                                                </div>
                                                <div
                                                    style="
                                                    font-family: inherit;
                                                    text-align: right;
                                                    "
                                                >
                                                    <span
                                                    style="
                                                        margin-top: 0px;
                                                        margin-right: 0px;
                                                        margin-bottom: 0px;
                                                        margin-left: 0px;
                                                        font-family: roboto,
                                                        'helvetica neue', helvetica,
                                                        arial, sans-serif;
                                                        line-height: 15.6px;
                                                        color: #222222;
                                                        font-size: small;
                                                        font-style: normal;
                                                        font-variant-ligatures: normal;
                                                        font-variant-caps: normal;
                                                        font-weight: 400;
                                                        letter-spacing: normal;
                                                        orphans: 2;
                                                        text-align: -webkit-right;
                                                        text-indent: 0px;
                                                        text-transform: none;
                                                        widows: 2;
                                                        word-spacing: 0px;
                                                        -webkit-text-stroke-width: 0px;
                                                        white-space-collapse: collapse;
                                                        text-wrap-mode: wrap;
                                                        background-color: rgb(
                                                        255,
                                                        255,
                                                        255
                                                        );
                                                        text-decoration-thickness: initial;
                                                        text-decoration-style: initial;
                                                        text-decoration-color: initial;
                                                    "
                                                    >
                                                    Booking ID - ${id_order}
                                                    </span>
                                                </div>
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
                                                    >Your Booking is Confirmed</strong
                                                    >
                                                </h3>
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
                                        <!--Title-->
                                        <table
                                        class="module"
                                        role="module"
                                        data-type="text"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="table-layout: fixed"
                                        data-muid="e87d7517-1591-4e5a-a855-bb202af83774"
                                        data-mc-module-version="2019-10-22"
                                        >
                                        <tbody>
                                            <tr>
                                            <td
                                                style="
                                                padding: 18px 0px 18px 0px;
                                                line-height: 0px;
                                                text-align: inherit;
                                                "
                                                height="100%"
                                                valign="top"
                                                bgcolor=""
                                                role="module-content"
                                            >
                                                <div>
                                                <div
                                                    style="
                                                    font-family: inherit;
                                                    text-align: inherit;
                                                    "
                                                >
                                                    <strong>Order Summary</strong>
                                                </div>
                                                <div></div>
                                                </div>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                        <!--Tickets-->
                                        ${ticketsRedc
                                          .map(
                                            (res, index) =>
                                              `<table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            align="center"
                                            width="100%"
                                            role="module"
                                            data-type="columns"
                                            style="padding: ${
                                              index == 0 ? "0px" : "15px"
                                            } 0px 0px 0px"
                                            bgcolor="#FFFFFF"
                                            data-distribution="1,1"
                                            >
                                            <tbody>
                                                <tr role="module-content">
                                                <td height="100%" valign="top">
                                                    <table
                                                    width="290"
                                                    style="
                                                        width: 290px;
                                                        border-spacing: 0;
                                                        border-collapse: collapse;
                                                        margin: 0px 10px 0px 0px;
                                                        padding: 10px 0px 0px 0px;
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
                                                            class="module"
                                                            role="module"
                                                            data-type="text"
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            width="100%"
                                                            style="table-layout: fixed"
                                                            data-muid="73b1b0a4-7b4b-4326-b7bd-52628fab08a1.1"
                                                            data-mc-module-version="2019-10-22"
                                                            >
                                                            <tbody>
                                                                <tr>
                                                                <td
                                                                    style="
                                                                    padding: 0px 0px 0px
                                                                        0px;
                                                                    line-height: 0px;
                                                                    text-align: inherit;
                                                                    "
                                                                    height="100%"
                                                                    valign="top"
                                                                    bgcolor=""
                                                                    role="module-content"
                                                                >
                                                                    <div>
                                                                    <div
                                                                        style="
                                                                        font-family: inherit;
                                                                        text-align: inherit;
                                                                        "
                                                                    >
                                                                        <span
                                                                        style="
                                                                            color: #222222;
                                                                            font-size: small;
                                                                            font-weight: 400;
                                                                        "
                                                                        >${
                                                                          res.name
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
                                                    <table
                                                    width="290"
                                                    style="
                                                        width: 290px;
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
                                                            data-muid="0d67f82f-719d-45d7-883b-e82fe4cc1497.1"
                                                            data-mc-module-version="2019-10-22"
                                                            >
                                                            <tbody>
                                                                <tr>
                                                                <td
                                                                    style="
                                                                    padding: 0px 0px 0px
                                                                        0px;
                                                                    line-height: 0px;
                                                                    text-align: inherit;
                                                                    "
                                                                    height="100%"
                                                                    valign="top"
                                                                    bgcolor=""
                                                                    role="module-content"
                                                                >
                                                                    <div>
                                                                    <div
                                                                        style="
                                                                        font-family: inherit;
                                                                        text-align: right;
                                                                        "
                                                                    >
                                                                        <span
                                                                        style="
                                                                            color: #222222;
                                                                            font-family: roboto,
                                                                            'helvetica neue',
                                                                            helvetica,
                                                                            arial,
                                                                            sans-serif;
                                                                            font-style: normal;
                                                                            font-variant-ligatures: normal;
                                                                            font-variant-caps: normal;
                                                                            font-weight: 400;
                                                                            letter-spacing: normal;
                                                                            orphans: 2;
                                                                            text-align: -webkit-right;
                                                                            text-indent: 0px;
                                                                            text-transform: none;
                                                                            widows: 2;
                                                                            word-spacing: 0px;
                                                                            -webkit-text-stroke-width: 0px;
                                                                            white-space-collapse: collapse;
                                                                            text-wrap-mode: wrap;
                                                                            background-color: rgb(
                                                                            255,
                                                                            255,
                                                                            255
                                                                            );
                                                                            text-decoration-thickness: initial;
                                                                            text-decoration-style: initial;
                                                                            text-decoration-color: initial;
                                                                            font-size: 14px;
                                                                        "
                                                                        >${
                                                                          res.amount
                                                                        }x</span
                                                                        ><span
                                                                        style="
                                                                            color: #222222;
                                                                            font-family: roboto,
                                                                            'helvetica neue',
                                                                            helvetica,
                                                                            arial,
                                                                            sans-serif;
                                                                            font-size: small;
                                                                            font-style: normal;
                                                                            font-variant-ligatures: normal;
                                                                            font-variant-caps: normal;
                                                                            font-weight: 400;
                                                                            letter-spacing: normal;
                                                                            orphans: 2;
                                                                            text-align: -webkit-right;
                                                                            text-indent: 0px;
                                                                            text-transform: none;
                                                                            widows: 2;
                                                                            word-spacing: 0px;
                                                                            -webkit-text-stroke-width: 0px;
                                                                            white-space-collapse: collapse;
                                                                            text-wrap-mode: wrap;
                                                                            background-color: rgb(
                                                                            255,
                                                                            255,
                                                                            255
                                                                            );
                                                                            text-decoration-thickness: initial;
                                                                            text-decoration-style: initial;
                                                                            text-decoration-color: initial;
                                                                            float: none;
                                                                            display: inline;
                                                                        "
                                                                        >&nbsp;</span
                                                                        ><span
                                                                        style="
                                                                            font-family: roboto,
                                                                            'helvetica neue',
                                                                            helvetica,
                                                                            arial,
                                                                            sans-serif;
                                                                            font-size: small;
                                                                            font-style: normal;
                                                                            font-variant-ligatures: normal;
                                                                            font-variant-caps: normal;
                                                                            font-weight: 400;
                                                                            letter-spacing: normal;
                                                                            orphans: 2;
                                                                            text-align: -webkit-right;
                                                                            text-indent: 0px;
                                                                            text-transform: none;
                                                                            widows: 2;
                                                                            word-spacing: 0px;
                                                                            -webkit-text-stroke-width: 0px;
                                                                            white-space-collapse: collapse;
                                                                            text-wrap-mode: wrap;
                                                                            background-color: rgb(
                                                                            255,
                                                                            255,
                                                                            255
                                                                            );
                                                                            text-decoration-thickness: initial;
                                                                            text-decoration-style: initial;
                                                                            text-decoration-color: initial;
                                                                            color: #cf0032;
                                                                        "
                                                                        ><strong
                                                                            >$${numberFormat(
                                                                              res.price
                                                                            )}</strong
                                                                        ></span
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
                                            </tbody>`
                                          )
                                          .join("")}
                                        <!---->
                                        <!--separador-->
                                        <table
                                        class="module"
                                        role="module"
                                        data-type="divider"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="table-layout: fixed"
                                        data-muid="87af037c-6353-4442-9225-b74d45dc6551"
                                        >
                                        <tbody>
                                            <tr>
                                            <td
                                                style="padding: 15px 0px 0px 0px"
                                                role="module-content"
                                                height="100%"
                                                valign="top"
                                                bgcolor=""
                                            >
                                                <table
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                align="center"
                                                width="100%"
                                                height="1px"
                                                style="
                                                    line-height: 1px;
                                                    font-size: 1px;
                                                "
                                                >
                                                <tbody>
                                                    <tr>
                                                    <td
                                                        style="padding: 0px 0px 1px 0px"
                                                        bgcolor="#000000"
                                                    ></td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                        <!---->
                                        <!--sub valores-->
                                        <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        align="center"
                                        width="100%"
                                        role="module"
                                        data-type="columns"
                                        style="padding: 10px 0px 0px 0px"
                                        bgcolor="#FFFFFF"
                                        data-distribution="1,1"
                                        >
                                        <tbody>
                                            <tr role="module-content">
                                            <td height="100%" valign="top">
                                                <table
                                                width="290"
                                                style="
                                                    width: 290px;
                                                    border-spacing: 0;
                                                    border-collapse: collapse;
                                                    margin: 0px 10px 0px 0px;
                                                    padding: 10px 0px 0px 0px;
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
                                                        class="module"
                                                        role="module"
                                                        data-type="text"
                                                        border="0"
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        width="100%"
                                                        style="table-layout: fixed"
                                                        data-muid="73b1b0a4-7b4b-4326-b7bd-52628fab08a1.1"
                                                        data-mc-module-version="2019-10-22"
                                                        >
                                                        <tbody>
                                                            <tr>
                                                            <td
                                                                style="
                                                                padding: 0px 0px 0px
                                                                    0px;
                                                                line-height: 0px;
                                                                text-align: inherit;
                                                                "
                                                                height="100%"
                                                                valign="top"
                                                                bgcolor=""
                                                                role="module-content"
                                                            >
                                                                <div
                                                                style="
                                                                    font-family: inherit;
                                                                    text-align: inherit;
                                                                "
                                                                >
                                                                <span
                                                                    style="
                                                                    color: #222222;
                                                                    font-size: small;
                                                                    font-weight: 400;
                                                                    "
                                                                    >Subtotal</span
                                                                >
                                                                </div>
                                                            </td>
                                                            </tr>
                                                        </tbody>
                                                        </table>
                                                    </td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                                <table
                                                width="290"
                                                style="
                                                    width: 290px;
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
                                                        data-muid="0d67f82f-719d-45d7-883b-e82fe4cc1497.1"
                                                        data-mc-module-version="2019-10-22"
                                                        >
                                                        <tbody>
                                                            <tr>
                                                            <td
                                                                style="
                                                                padding: 0px 0px 0px
                                                                    0px;
                                                                line-height: 0px;
                                                                text-align: inherit;
                                                                "
                                                                height="100%"
                                                                valign="top"
                                                                bgcolor=""
                                                                role="module-content"
                                                            >
                                                                <div
                                                                style="
                                                                    font-family: inherit;
                                                                    text-align: right;
                                                                "
                                                                >
                                                                <span
                                                                    style="
                                                                    color: #cf0032;
                                                                    font-size: 14px;
                                                                    "
                                                                >
                                                                    <strong
                                                                    >$${numberFormat(
                                                                      price.subTotal ||
                                                                        total_price -
                                                                          price.price
                                                                    )}</strong
                                                                    >
                                                                </span>
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
                                        <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        align="center"
                                        width="100%"
                                        role="module"
                                        data-type="columns"
                                        style="padding: 15px 0px 0px 0px"
                                        bgcolor="#FFFFFF"
                                        data-distribution="1,1"
                                        >
                                        <tbody>
                                            <tr role="module-content">
                                            <td height="100%" valign="top">
                                                <table
                                                width="290"
                                                style="
                                                    width: 290px;
                                                    border-spacing: 0;
                                                    border-collapse: collapse;
                                                    margin: 0px 10px 0px 0px;
                                                    padding: 10px 0px 0px 0px;
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
                                                        class="module"
                                                        role="module"
                                                        data-type="text"
                                                        border="0"
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        width="100%"
                                                        style="table-layout: fixed"
                                                        data-muid="73b1b0a4-7b4b-4326-b7bd-52628fab08a1.1"
                                                        data-mc-module-version="2019-10-22"
                                                        >
                                                        <tbody>
                                                            <tr>
                                                            <td
                                                                style="
                                                                padding: 0px 0px 0px
                                                                    0px;
                                                                line-height: 0px;
                                                                text-align: inherit;
                                                                "
                                                                height="100%"
                                                                valign="top"
                                                                bgcolor=""
                                                                role="module-content"
                                                            >
                                                                <div
                                                                style="
                                                                    font-family: inherit;
                                                                    text-align: inherit;
                                                                "
                                                                >
                                                                <span
                                                                    style="
                                                                    color: #222222;
                                                                    font-size: small;
                                                                    font-weight: 400;
                                                                    "
                                                                    >Service Fees</span
                                                                >
                                                                </div>
                                                            </td>
                                                            </tr>
                                                        </tbody>
                                                        </table>
                                                    </td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                                <table
                                                width="290"
                                                style="
                                                    width: 290px;
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
                                                        data-muid="0d67f82f-719d-45d7-883b-e82fe4cc1497.1"
                                                        data-mc-module-version="2019-10-22"
                                                        >
                                                        <tbody>
                                                            <tr>
                                                            <td
                                                                style="
                                                                padding: 0px 0px 0px
                                                                    0px;
                                                                line-height: 0px;
                                                                text-align: inherit;
                                                                "
                                                                height="100%"
                                                                valign="top"
                                                                bgcolor=""
                                                                role="module-content"
                                                            >
                                                                <div
                                                                style="
                                                                    font-family: inherit;
                                                                    text-align: right;
                                                                "
                                                                >
                                                                <span
                                                                    style="
                                                                    color: #cf0032;
                                                                    font-size: 14px;
                                                                    "
                                                                >
                                                                    <strong
                                                                    >${numberFormat(
                                                                      price.serviceFee
                                                                    )}</strong
                                                                    >
                                                                </span>
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
                                        <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        align="center"
                                        width="100%"
                                        role="module"
                                        data-type="columns"
                                        style="padding: 15px 0px 15px 0px"
                                        bgcolor="#FFFFFF"
                                        data-distribution="1,1"
                                        >
                                        <tbody>
                                            <tr role="module-content">
                                            <td height="100%" valign="top">
                                                <table
                                                width="290"
                                                style="
                                                    width: 290px;
                                                    border-spacing: 0;
                                                    border-collapse: collapse;
                                                    margin: 0px 10px 0px 0px;
                                                    padding: 10px 0px 0px 0px;
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
                                                        class="module"
                                                        role="module"
                                                        data-type="text"
                                                        border="0"
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        width="100%"
                                                        style="table-layout: fixed"
                                                        data-muid="73b1b0a4-7b4b-4326-b7bd-52628fab08a1.1"
                                                        data-mc-module-version="2019-10-22"
                                                        >
                                                        <tbody>
                                                            <tr>
                                                            <td
                                                                style="
                                                                padding: 0px 0px 0px
                                                                    0px;
                                                                line-height: 0px;
                                                                text-align: inherit;
                                                                "
                                                                height="100%"
                                                                valign="top"
                                                                bgcolor=""
                                                                role="module-content"
                                                            >
                                                                <div
                                                                style="
                                                                    font-family: inherit;
                                                                    text-align: inherit;
                                                                "
                                                                >
                                                                <span
                                                                    style="
                                                                    color: #222222;
                                                                    font-size: small;
                                                                    font-weight: 400;
                                                                    "
                                                                    >Processing
                                                                    Fee</span
                                                                >
                                                                </div>
                                                            </td>
                                                            </tr>
                                                        </tbody>
                                                        </table>
                                                    </td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                                <table
                                                width="290"
                                                style="
                                                    width: 290px;
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
                                                        data-muid="0d67f82f-719d-45d7-883b-e82fe4cc1497.1"
                                                        data-mc-module-version="2019-10-22"
                                                        >
                                                        <tbody>
                                                            <tr>
                                                            <td
                                                                style="
                                                                padding: 0px 0px 0px
                                                                    0px;
                                                                line-height: 0px;
                                                                text-align: inherit;
                                                                "
                                                                height="100%"
                                                                valign="top"
                                                                bgcolor=""
                                                                role="module-content"
                                                            >
                                                                <div
                                                                style="
                                                                    font-family: inherit;
                                                                    text-align: right;
                                                                "
                                                                >
                                                                <span
                                                                    style="
                                                                    color: #cf0032;
                                                                    font-size: 14px;
                                                                    "
                                                                >
                                                                    <strong
                                                                    >${numberFormat(
                                                                      price.processingFee
                                                                    )}</strong
                                                                    >
                                                                </span>
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
                                        <!---->
                                        <!--separador-->
                                        <table
                                        class="module"
                                        role="module"
                                        data-type="divider"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="table-layout: fixed"
                                        data-muid="87af037c-6353-4442-9225-b74d45dc6551"
                                        >
                                        <tbody>
                                            <tr>
                                            <td
                                                style="padding: 0px 0px 0px 0px"
                                                role="module-content"
                                                height="100%"
                                                valign="top"
                                                bgcolor=""
                                            >
                                                <table
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                align="center"
                                                width="100%"
                                                height="1px"
                                                style="
                                                    line-height: 1px;
                                                    font-size: 1px;
                                                "
                                                >
                                                <tbody>
                                                    <tr>
                                                    <td
                                                        style="padding: 0px 0px 1px 0px"
                                                        bgcolor="#000000"
                                                    ></td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                        <!---->
                                        <!--Total-->
                                        <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        align="center"
                                        width="100%"
                                        role="module"
                                        data-type="columns"
                                        style="padding: 12px 0px 15px 0px"
                                        bgcolor="#FFFFFF"
                                        data-distribution="1,1"
                                        >
                                        <tbody>
                                            <tr role="module-content">
                                            <td height="100%" valign="top">
                                                <table
                                                width="290"
                                                style="
                                                    width: 290px;
                                                    border-spacing: 0;
                                                    border-collapse: collapse;
                                                    margin: 0px 10px 0px 0px;
                                                    padding: 10px 0px 0px 0px;
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
                                                        class="module"
                                                        role="module"
                                                        data-type="text"
                                                        border="0"
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        width="100%"
                                                        style="table-layout: fixed"
                                                        data-muid="73b1b0a4-7b4b-4326-b7bd-52628fab08a1.1"
                                                        data-mc-module-version="2019-10-22"
                                                        >
                                                        <tbody>
                                                            <tr>
                                                            <td
                                                                style="
                                                                padding: 0px 0px 0px
                                                                    0px;
                                                                line-height: 0px;
                                                                text-align: inherit;
                                                                "
                                                                height="100%"
                                                                valign="top"
                                                                bgcolor=""
                                                                role="module-content"
                                                            >
                                                                <div>
                                                                <div
                                                                    style="
                                                                    font-family: inherit;
                                                                    text-align: inherit;
                                                                    "
                                                                >
                                                                    <span
                                                                    style="
                                                                        color: #222222;
                                                                        font-size: 20px;
                                                                        font-weight: 400;
                                                                    "
                                                                    >Total</span
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
                                                <table
                                                width="290"
                                                style="
                                                    width: 290px;
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
                                                        data-muid="0d67f82f-719d-45d7-883b-e82fe4cc1497.1"
                                                        data-mc-module-version="2019-10-22"
                                                        >
                                                        <tbody>
                                                            <tr>
                                                            <td
                                                                style="
                                                                padding: 0px 0px 0px
                                                                    0px;
                                                                line-height: 0px;
                                                                text-align: inherit;
                                                                "
                                                                height="100%"
                                                                valign="top"
                                                                bgcolor=""
                                                                role="module-content"
                                                            >
                                                                <div>
                                                                <div
                                                                    style="
                                                                    font-family: inherit;
                                                                    text-align: right;
                                                                    "
                                                                >
                                                                    <span
                                                                    style="
                                                                        font-size: 20px;
                                                                        font-weight: 400;
                                                                        color: #cf0032;
                                                                    "
                                                                    ><strong
                                                                        >${numberFormat(
                                                                          total_price ||
                                                                            0
                                                                        )}</strong
                                                                    ></span
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
                                        <!---->

                                        <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="module"
                                        data-role="module-button"
                                        data-type="button"
                                        role="module"
                                        style="table-layout: fixed"
                                        width="100%"
                                        data-muid="f58d851d-0992-4ace-9525-87cb42854bd5"
                                        >
                                        <tbody>
                                            <tr>
                                            <td
                                                align="center"
                                                bgcolor=""
                                                class="outer-td"
                                                style="padding: 6px 0px 6px 0px"
                                            >
                                                <table
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                class="wrapper-mobile"
                                                style="text-align: center"
                                                >
                                                <tbody>
                                                    <tr>
                                                    <td
                                                        align="center"
                                                        bgcolor="#333333"
                                                        class="inner-td"
                                                        style="
                                                        border-radius: 6px;
                                                        font-size: 16px;
                                                        text-align: center;
                                                        background-color: inherit;
                                                        "
                                                    >
                                                        <a
                                                        href="www.theeventjet.com/ticket/${id_order}"
                                                        style="
                                                            background-color: #333333;
                                                            border: 1px solid #333333;
                                                            border-color: #333333;
                                                            border-radius: 20px;
                                                            border-width: 1px;
                                                            color: #ffffff;
                                                            display: inline-block;
                                                            font-size: 14px;
                                                            font-weight: normal;
                                                            letter-spacing: 0px;
                                                            line-height: normal;
                                                            padding: 12px 18px 12px 18px;
                                                            text-align: center;
                                                            text-decoration: none;
                                                            border-style: solid;
                                                        "
                                                        target="_blank"
                                                        >View Order</a
                                                        >
                                                    </td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </td>
                                            </tr>
                                        </tbody>
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

module.exports = completeOrder;
