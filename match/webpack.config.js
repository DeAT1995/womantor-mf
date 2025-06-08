const {
  withModuleFederationPlugin,
  shareAll,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "match",
  exposes: {
    "./MatchComponent": "./src/app/pages/matchmaking/matchmaking.ts",
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
