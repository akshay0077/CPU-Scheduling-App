const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.performance = {
    ...config.performance,
    maxAssetSize: 800000,
    maxEntrypointSize: 800000,
  };
  return config;
};
