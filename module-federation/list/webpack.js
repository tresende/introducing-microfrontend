const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  mode: "development",
  output: {
    publicPath: "http://localhost:3001/",
  },
  devServer: {
    port: 3001,
    historyApiFallback: {
      index: "index.html", //nao gera build, apenas para desenvolvimento
    },
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "list", // nome do microfront, esse deve ser único
      filename: "index.js", // arquivo que vai ser servido ex: http://localhost:3001/index.js
      exposes: {
        "./ListModule": "./src/bootstrap", // nome do modulo e qual arquivo inicial
        // o nome list module vai ser visivel para quem usar esse microfront
      },
      shared: packageJson.dependencies, // compartilha todas as dependencias
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html", //apenas para desenvolvimento
    }),
  ],
};
