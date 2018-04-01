import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/main.js",
      name: "ComponentsByRollup",
      format: "umd",
      globals: {
        react: "react"
      }
    },
    {
      file: "dist/main.cjs.js",
      format: "cjs"
    },
    {
      file: "dist/main.es.js",
      format: "es"
    }
  ],
  plugins: [
    babel({
      exclude: "node_modules/**"
    })
  ],
  external: ["react"]
};
