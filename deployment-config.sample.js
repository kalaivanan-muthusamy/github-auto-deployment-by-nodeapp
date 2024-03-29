const APPLICATIONS = [
  {
    APPLICATION_NAME: "API",
    GITHUB_REPOSITORY_FULL_NAME: "user/repository",
    BRANCHES_TO_DEPLOY: ["refs/heads/develop"],
    APPLICATION_PATH_ON_SERVER: "/home/ubuntu/api",
    SHELL_FILE_PATH_EXECUTE: "/home/ubuntu/deployment/api_deployment.sh",
  }
];

const PORT_TO_RUN_THE_APP = "9001";
const ENDPOINT_FOR_WEBHOOK = "/hooks/github";
const SECRET_KEY = process.env.SECRET;

module.exports = {
  APPLICATIONS,
  PORT_TO_RUN_THE_APP,
  ENDPOINT_FOR_WEBHOOK,
  SECRET_KEY
};
