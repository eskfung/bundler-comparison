const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Webpack Defaults:
  //
  // entry: {
  //   main: "./src/index.js",
  // },
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   publicPath: "/"
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: [/node_modules/]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Custom Webpacked App",
      template: "src/templates/index.html"
    })
  ]
};
