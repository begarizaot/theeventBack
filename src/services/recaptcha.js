const {
  RecaptchaEnterpriseServiceClient,
} = require("@google-cloud/recaptcha-enterprise");

const verifyRecaptcha = async (token) => {
  try {
    const client = new RecaptchaEnterpriseServiceClient();
    const projectPath = client.projectPath(process.env.PROJECTID);

    // Build the assessment request.
    const request = {
      assessment: {
        event: {
          token: token,
          siteKey: process.env.RECAPTCHAKEY,
        },
      },
      parent: projectPath,
    };

    const [response] = await client.createAssessment(request);
    console.log('createAssessment',response);
    if (!response.tokenProperties.valid) {
      console.log(
        `The CreateAssessment call failed because the token was: ${response.tokenProperties.invalidReason}`
      );
      return null;
    }

    if (response.tokenProperties.action === process.env.RECAPTCHAACTION) {
      console.log(`The reCAPTCHA score is: ${response.riskAnalysis.score}`);
      response.riskAnalysis.reasons.forEach((reason) => {
        console.log(reason);
      });

      return response.riskAnalysis.score;
    } else {
      console.log(
        "The action attribute in your reCAPTCHA tag does not match the action you are expecting to score"
      );
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  verifyRecaptcha,
};
