const APPLICATIONS = [
  {
    APPLICATION_NAME: "API",
    GITHUB_REPOSITORY_FULL_NAME: "bringmealsbackend/bringmeals-api",
    BRANCHES_TO_DEPLOY: ["refs/heads/develop"],
    APPLICATION_PATH_ON_SERVER: "/home/ubuntu/bringmeals/api",
    SHELL_FILE_PATH_EXECUTE: "/home/ubuntu/deployment/api_deployment.sh",
  },
  {
    APPLICATION_NAME: "ADMIN",
    GITHUB_REPOSITORY_FULL_NAME: "bringmealsbackend/bringmeals-admin",
    BRANCHES_TO_DEPLOY: ["refs/heads/develop"],
    APPLICATION_PATH_ON_SERVER: "/home/ubuntu/bringmeals/admin",
    SHELL_FILE_PATH_EXECUTE: "/home/ubuntu/deployment/admin_deployment.sh",
  },
];

const PORT_TO_RUN_THE_APP = "9001";
const ENDPOINT_FOR_WEBHOOK = "hooks/github";
const SECRET_KEY = "GyzdX4fVRZgSe6VsGfiD";
const POST_URL = `/${ENDPOINT_FOR_WEBHOOK}`;

module.exports = {
  APPLICATIONS,
  PORT_TO_RUN_THE_APP,
  ENDPOINT_FOR_WEBHOOK,
  SECRET_KEY,
  POST_URL,
};
