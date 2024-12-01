const ticketEmail = require("./mails/ticketEmail");
const sgMail = require('@sendgrid/mail'); 
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const mailOrderCreated = async (data = {}) => {
  try {
    const msg = {
      to: data?.order?.user_id?.email || "",
      from: `The Event Jet <${process.env.EMAIL_ADDRESS}>`,
      subject: `Your tickets to ${data.event.event_name || ""}!`,
      html: ticketEmail(data),
      attachments: data.pdfs.map((pdf, index) => ({
        filename: `ticket_${index + 1}.pdf`,
        type: "application/pdf",
        content: pdf,
        content_id: `ticket_${index + 1}.pdf`,
        disposition: 'attachment',
      })),
    };

    await sgMail.send(msg);
  } catch (err) {
    console.log(err);
  }
};


const mailSend = async (
  data = {
    email: "",
    subject: "",
    html: "",
  }
) => {
  try {
    const msg = {
      to: data?.email || "",
      from: `The Event Jet <${process.env.EMAIL_ADDRESS}>`,
      subject: data.subject || "",
      html: data.html || "",
    };
    await sgMail.send(msg);
  } catch (err) {
  }
};

module.exports = {
  mailOrderCreated,
  mailSend,
};
