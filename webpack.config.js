const path = require('path');
const nodeExternals = require('webpack-node-externals');

// module.exports = {
//     entry: 'index.js',
//     mode: "development",
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname,"dist"),
//     },
//     target: 'node', // in order to ignore built-in modules like path, fs, etc.
//     externals: [nodeExternals()]
// };


// const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};