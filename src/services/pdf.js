const pdfMake = require("pdfmake/build/pdfmake");
const pdfFonts = require("pdfmake/build/vfs_fonts");
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const { imageURLBase64 } = require("./general");

const moment = require("moment");
const formHour = (hour) => {
  return moment(hour, "HH:mm").format("hh:mm a");
};

const onDataPdf = async (data) => {
  const { events, ticketName, user_id: user, ticketId } = data;

  return [
    {
      image:
        (await imageURLBase64(
          "https://res.cloudinary.com/dii5f60xx/image/upload/v1725416651/bg_black_1f5cff80b2.png"
        )) || "",
      height: 40,
      width: 250,
      alignment: "center",
    },
    {
      margin: [0, 20, 0, 20],
      table: {
        widths: ["*"],
        body: [
          [
            {
              text: "Event Ticket",
              border: [false, false, false, false],
              fillColor: "#000000",
              fontSize: 20,
              bold: true,
              color: "#ffffff",
              alignment: "center",
            },
          ],
        ],
      },
      layout: {
        paddingTop: function (i, node) {
          return 10;
        },
        paddingBottom: function (i, node) {
          return 10;
        },
      },
    },
    {
      alignment: "justify",
      columns: [
        {
          marginTop: 50,
          stack: [
            { text: events?.event_name || "", bold: true, fontSize: 16 },
            { text: `(${ticketName || ""})`, color: "#cf0032" },
            { text: events?.map_id?.labelCompl || "", marginBottom: 10 },
            {
              text: `${moment(events?.start_date || "").format(
                "MMMM DD, YYYY"
              )}`,
            },
            {
              text: `${formHour(events?.start_date || "")} - ${formHour(
                events?.end_date || ""
              )}`,
            },
            {
              text: `Age Restriction: ${
                events?.event_age_restriction_id?.name || ""
              }`,
            },
          ],
        },
        {
          image:
            (await imageURLBase64(
              (events?.image && events?.image[0]?.url) || ""
            )) || "",
          height: 200,
          width: 180,
          alignment: "center",
        },
      ],
    },
    {
      marginTop: 20,
      columns: [
        {
          stack: [
            { text: "Name" },
            {
              text: `${user?.firstname || ""} ${user?.lastname || ""}`,
              bold: true,
              fontSize: 16,
            },
          ],
        },
        {
          alignment: "right",
          stack: [
            { text: "Ticket Number" },
            {
              text: `${ticketId || ""}`,
              bold: true,
              fontSize: 16,
            },
          ],
        },
      ],
    },
    {
      qr: ticketId || "",
      fit: 200,
      alignment: "center",
      marginTop: 20,
    },
  ];
};

const generatePdfTicket = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // @ts-ignore
      // const pdf = pdfMake.createPdf(pdfDefinition);
      // pdf.getBase64((encodedString) => {
      //   resolve(encodedString);
      // });
    } catch (error) {
      reject(error);
    }
  });
};

const generateListPdfTickets = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let pdfDefinition = await Promise.all(
        data.tickets.map(async (ticket, index) => {
          const pdf = await onDataPdf({
            ...data,
            ticketId: ticket.id_ticket,
            ticketName: ticket.ticket_type_id.name,
          });

          return [
            ...pdf,
            index !== data.tickets.length - 1
              ? {
                  text: "",
                  pageBreak: "after",
                }
              : {},
          ];
        })
      );

      pdfMake
        .createPdf({
          content: pdfDefinition,
          styles: {},
        })
        .getBase64((encodedString) => {
          resolve(encodedString);
        });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  generatePdfTicket,
  generateListPdfTickets,
};
