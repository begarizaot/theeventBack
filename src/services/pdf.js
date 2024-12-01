const pdfMake = require("pdfmake/build/pdfmake");
// @ts-ignore
const pdfFonts = require("pdfmake/build/vfs_fonts");
const moment = require("moment");
const { eventBase64ImageFromURL } = require("./general");
// @ts-ignore
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const formHour = (hour) => {
  return moment(hour, "HH:mm").format("hh:mm a");
};

const checkoutTicketPdf = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const pdfDefinition = {
        content: [
          {
            image:
              (await eventBase64ImageFromURL(
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
                  { text: data?.event?.event_name, bold: true, fontSize: 16 },
                  { text: `(${data?.ticket?.name})`, color: "#cf0032" },
                  { text: data?.event?.location, marginBottom: 10 },
                  {
                    text: `${moment(data?.event?.event_date).format(
                      "MMMM DD, YYYY"
                    )}`,
                  },
                  {
                    text: `${formHour(data?.event?.door_time)} - ${formHour(
                      data?.event?.end_time
                    )}`,
                  },
                  {
                    text: `Age Restriction: ${data?.event?.age_restriction}`,
                  },
                ],
              },
              {
                image:
                  (await eventBase64ImageFromURL(data?.event?.image)) || "",
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
                    text: `${data?.order?.user_id?.firstname || ""} ${
                      data?.order?.user_id?.lastname || ""
                    }`,
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
                    text: `${data?.ticket?.id_ticket || ""}`,
                    bold: true,
                    fontSize: 16,
                  },
                ],
              },
            ],
          },
          {
            qr: data?.ticket?.id_ticket || "",
            fit: 200,
            alignment: "center",
            marginTop: 20,
          },
        ],
        styles: {},
      };
      
      // @ts-ignore
      const pdf = pdfMake.createPdf(pdfDefinition);
      pdf.getBase64((encodedString) => {
        resolve(encodedString);
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  checkoutTicketPdf,
};
