var webpack = require("webpack");

module.exports = {
  entry: {
    level_one: "./bundles/one.js",
    level_two: "./bundles/two.js",
    level_three: "./bundles/three.js"
  },

  output: {
    path: "./bundles",
    filename: "[name].bundle.js"
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: "jsx-loader?harmony" },
      { test: /\.jsx$/, loader: "jsx-loader?harmony" }
    ]
  },

  resolve: {
    extensions: ["", ".jsx", ".js"]
  },

  watchOptions: {
    poll: true
  }
};
