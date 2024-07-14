const webpack = require("webpack");

module.exports = function override(config, env) {
  // Fallback for node modules in the browser
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    zlib: require.resolve("browserify-zlib"),
    url: require.resolve("url/"),
  };

  // Adding plugins
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ];

  // Adding a rule for fully specified module paths
  config.module.rules.push({
    test: /\.m?js/,
    resolve: {
      fullySpecified: false,
    },
  });

  // Ignoring warnings
  config.ignoreWarnings = [/Failed to parse source map/];

  return config;
};
