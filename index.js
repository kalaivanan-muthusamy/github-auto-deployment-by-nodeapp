const express = require("express");
const bodyParser = require('body-parser')
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const Configs = require("./configs");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(gitHubValidation);

app.post(Configs.POST_URL, (req, res) => {
  const payload = req.body.payload;
  if (
    payload.ref === Configs.BRANCHES_TO_DEPLOY &&
    payload.repository.full_name === Configs.GITHUB_REPOSITORY_FULL_NAME
  ) {
    res.end("Deployed");
  } else {
    res.end("Deployment criteria not met");
  }
});

app.listen(Configs.PORT_TO_RUN_THE_APP, () =>
  console.log(`Deployment app listening at ${Configs.PORT_TO_RUN_THE_APP}`)
);

function gitHubValidation(req, res, next) {
  console.log(req.headers);
  next();
}
