// must restart server whenever you make changes in next.config
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
// const commonsChunkConfig = require("@zeit/next-css/commons-chunk-config");
const webpack = require("webpack");

module.exports = withSass(
  withCSS({
    webpack(config) {
      config.plugins.push(
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
        })
      );
      return config;
    },
  })
);
