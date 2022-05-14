const { dependencies } = require("./package.json");

module.exports = {
  name: "microfrontends_and_modulefederations_setup",
  exposes: {
    "./Button": "./src/Button",
  },
  filename: "remoteEntry.js",
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
