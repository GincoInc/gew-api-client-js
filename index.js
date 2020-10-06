module.exports = {
  ...require("./gen/gincoinc/adamant/global/v1/adamantglobalv1/global_api_pb"),
  ...require("./gen/gincoinc/adamant/global/v1/adamantglobalv1/global_api_grpc_pb"),
  ...require("./gen/gincoinc/adamant/teller/v1/adamanttellerv1/teller_api_pb"),
  ...require("./gen/gincoinc/adamant/teller/v1/adamanttellerv1/teller_api_grpc_pb"),
  ...require("./gen/gincoinc/global/v1/gincoincglobalv1/enum_pb"),
  ...require("./gen/gincoinc/adamant/global/v1/adamantglobalv1/model_pb")
};
