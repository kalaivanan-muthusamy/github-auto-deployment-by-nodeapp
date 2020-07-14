exports.GITHUB_REPOSITORY_FULL_NAME = "bringmealsbackend/bringmeals-api";
exports.BRANCHES_TO_DEPLOY = "refs/heads/develop";
exports.TRIGGER_CONFIGURATIONS = "ALL";
exports.APPLICATION_PATH_ON_SERVER = "/home/ubuntu/bringmeals/api";
exports.SHELL_FILE_PATH_EXECUTE = "api_deployment.sh";
exports.PORT_TO_RUN_THE_APP = "9001";
exports.ENDPOINT_FOR_WEBHOOK = "hooks";
exports.UNIQUE_RANDOM_STRING = "GyzdX4fVRZgSe6VsGfiD";
exports.GITHUB_CONTENT_TYPE = "application/json";

exports.POST_URL = `/${ENDPOINT_FOR_WEBHOOK}/${UNIQUE_RANDOM_STRING}`;
