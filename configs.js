const GITHUB_REPOSITORY_FULL_NAME = "bringmealsbackend/bringmeals-api";
const BRANCHES_TO_DEPLOY = "refs/heads/develop";
const APPLICATION_PATH_ON_SERVER = "/home/ubuntu/bringmeals/api";
const SHELL_FILE_PATH_EXECUTE = "api_deployment.sh";
const PORT_TO_RUN_THE_APP = "9001";
const ENDPOINT_FOR_WEBHOOK = "hooks/github";
const SECRET_KEY = "GyzdX4fVRZgSe6VsGfiD";
const POST_URL = `/${ENDPOINT_FOR_WEBHOOK}`;

module.exports = {
  GITHUB_REPOSITORY_FULL_NAME,
  BRANCHES_TO_DEPLOY,
  APPLICATION_PATH_ON_SERVER,
  SHELL_FILE_PATH_EXECUTE,
  PORT_TO_RUN_THE_APP,
  ENDPOINT_FOR_WEBHOOK,
  SECRET_KEY,
  POST_URL,
};
