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
    if (
      payload.ref === Configs.BRANCHES_TO_DEPLOY &&
      payload.repository.full_name === Configs.GITHUB_REPOSITORY_FULL_NAME
    ) {
      const { error } = await exec(`sh ${Configs.SHELL_FILE_PATH_EXECUTE}`);
      if (error)
        res.status(500).json({
          message: "Deployment failed. Check the server log for more info",
        });
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

function gitHubValidation(req, res, next) {
  console.log(req.headers);
  next();
}
