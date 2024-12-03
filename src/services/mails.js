const client = require("@sendgrid/client");
client.setApiKey(process.env.SENDGRIDVALIDATE_API_KEY);

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

module.exports = {
  validateEmail,
};
