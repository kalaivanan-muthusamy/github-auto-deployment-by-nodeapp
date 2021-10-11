require('dotenv').config()
const crypto = require("crypto");
const express = require("express");
const bodyParser = require("body-parser");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const Configs = require("./configs");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(gitHubValidation);

app.post(Configs.POST_URL, async (req, res) => {
  try {
    const payload = JSON.parse(req.body.payload);

    const applicationConfig = getApplicationConfig(payload);
    if (!applicationConfig) {
      return res.status(400).json({
        message: "Not deployment configuration found for the repository",
      });
    }

    if (applicationConfig.BRANCHES_TO_DEPLOY.includes(payload.ref)) {
      console.log(`Deploying ${applicationConfig?.APPLICATION_NAME}`)
      const { error } = await exec(
        `sh ${applicationConfig.SHELL_FILE_PATH_EXECUTE}`
      );
      if (error)
        res.status(500).json({
          message: "Deployment failed. Check the server log for more info",
        });
      console.log(`Deploying completed for ${applicationConfig?.APPLICATION_NAME}`)
      res.json({ message: "Deployed" });
    } else {
      res.status(400).json({ message: "Deployment criteria not met" });
    }
  } catch (err) {
    res.status(500).json({
      message: "Deployment failed. Check the server log for more info",
    });
  }
});

app.listen(Configs.PORT_TO_RUN_THE_APP, () =>
  console.log(`Deployment app listening at ${Configs.PORT_TO_RUN_THE_APP}`)
);

/**
 * An Express middleware to validate if the incoming request is secure and authorized
 *
 */
function gitHubValidation(req, res, next) {
  try {
    const payload = JSON.stringify(req.body);
    const sig = req.get("X-Hub-Signature") || "";
    const hmac = crypto.createHmac("sha1", Configs.SECRET_KEY);
    const digest = Buffer.from(
      "sha1=" + hmac.update(payload).digest("hex"),
      "utf8"
    );
    const checksum = Buffer.from(sig, "utf8");
    if (checksum.length !== digest.length) {
      res.status(400).json({
        message: "Invalid Request. Couldn't verify the ownership",
      });
    } else {
      next();
    }
  } catch (err) {
    res.status(400).json({ message: "Couldn't validate the request" });
  }
}

function getApplicationConfig(payload) {
  const repositoryName = payload.repository.full_name;
  const applicationConfig = Configs.APPLICATIONS.find(
    (application) => application.GITHUB_REPOSITORY_FULL_NAME === repositoryName
  );
  return applicationConfig;
}
