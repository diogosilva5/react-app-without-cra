# React app without CRA (create-react-app)

- yarn init

- yarn add react react-dom

- yarn add webpack webpack-cli webpack-dev-server -D

- yarn add @babel/core @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime babel-loader -D

# CSS / SCSS

- yarn add mini-css-extract-plugin css-loader sass-loader sass -D

  webpack changes

  `{ test: /\.(css|scss)$/, use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader", ], },`

- yarn add postcss postcss-preset-env postcss-loader -D

  create postcss.config.js
  `module.exports = { plugins: ["postcss-preset-env"], }`

  webpack changes

  `{ test: /\.(css|scss)$/, use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"], },`

# Webpack Plugins

- yarn add html-webpack-plugin -D

-
