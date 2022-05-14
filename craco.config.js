const cracoModuleFederation = require("craco-module-federation");

module.exports = {
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
  // ! uncomment this section when you are using npm link otherwise you won't be able to import stuff located outside /src
  // webpack: {
  //   configure: (webpackConfig) => ({
  //     ...webpackConfig,
  //     module: {
  //       ...webpackConfig.module,
  //       rules: webpackConfig.module.rules.map((rule) => {
  //         if (!rule.oneOf) return rule;
  //         return {
  //           ...rule,
  //           oneOf: rule.oneOf.map((ruleObject) => {
  //             if (
  //               !new RegExp(ruleObject.test).test(".ts") ||
  //               !ruleObject.include
  //             )
  //               return ruleObject;
  //             return { ...ruleObject, include: undefined };
  //           }),
  //         };
  //       }),
  //     },
  //   }),
  // },
};
