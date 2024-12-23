const client = require("@sendgrid/client");
client.setApiKey(process.env.SENDGRIDVALIDATE_API_KEY);

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const validateEmail = async (email) => {
  return new Promise((resolve, reject) => {
    client
      .request({
        url: `/v3/validations/email`,
        method: "POST",
        body: { email },
      })
      .then(([response]) => {
        resolve({ status: true, data: response?.body?.result?.verdict || "" });
      })
      .catch((error) => {
        resolve({ status: false, message: error });
      });
  });
};

const mailOrderCreated = async ({ email, eventName, html, pdf }) => {
  try {
    const msg = {
      to: email || "",
      from: `The Event Jet <${process.env.EMAIL_ADDRESS}>`,
      subject: `Your tickets to ${eventName || ""}!`,
      html: html,
      attachments: [
        {
          content: pdf,
          filename: "tickets.pdf",
          type: "application/pdf",
          disposition: "attachment",
          content_id: "tickets.pdf",
        },
      ],
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
  } catch (err) {}
};

module.exports = {
  validateEmail,
  mailOrderCreated,
  mailSend,
};
