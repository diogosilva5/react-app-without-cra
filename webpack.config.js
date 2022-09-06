const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  target: "web",
  entry: "./src/index.js",

  devServer: {
    port: "3000",
    static: ["./public"],
    open: true,
    hot: true,
  },

  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
    assetModuleFilename: "images/[hash][ext][query]",
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],

  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
};
