var webpack = require("webpack");

module.exports = {
  entry: {
    level_one: "./bundles/one.js"
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
