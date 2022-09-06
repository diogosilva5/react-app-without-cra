const path = require("path");

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
    filename: "main.js",
  },

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
    ],
  },
};
