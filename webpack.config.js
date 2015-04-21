const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const sassLoaders = [
  "css-loader",
  "autoprefixer-loader?browsers=last 2 version",
  "sass-loader?includePaths[]=" + path.resolve(__dirname, "./src"),
];

const config = {
  entry: {
    app: ['webpack/hot/dev-server', "./src/index"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!")),
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./build"),
    publicPath: "/",
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.HotModuleReplacementPlugin()
    ],
  resolve: {
    extensions: ["", ".js", ".scss", ".css"],
    modulesDirectories: ["src", "node_modules"],
  },
};

module.exports = config;
