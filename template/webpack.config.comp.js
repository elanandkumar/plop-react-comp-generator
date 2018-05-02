const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: path.join(__dirname, "./src/index.comp.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "##__COMP_NAME__##.js"
  },
  optimization: {
    minimize: false
  },
  target: "node",
  externals: nodeExternals(),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
