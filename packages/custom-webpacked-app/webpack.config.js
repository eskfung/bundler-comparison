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
};
