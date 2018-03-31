const path = require("path");

module.exports = {
  // entry: "./src/index.js",  /*  Webpack 4's Default */
  output: {
    path: path.resolve("./dist"),
    filename: "main.js",
    library: "ComponentsByWebpack",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        use: "babel-loader",
        exclude: [/node_modules/]
      }
    ]
  },
  // By default, Webpack 4 needs to be told to resolve .jsx files
  //
  // resolve: {
  //   extensions: [".js", ".jsx"]
  // }

  /* Let consumer provide React, rather than bundle it ourselves */
  externals: {
    react: "react"
  }
};
