import React from "react";
import ReactDOM from "react-dom";
// import { HelloWorld } from "@bundler-comparison/components-babel";
import { HelloWorld } from "@bundler-comparison/components-rollup";
// import { HelloWorld } from "@bundler-comparison/components-webpack";

import { randomPlusFive } from "./helpers/randomPlus";

ReactDOM.render(
  <div>
    <HelloWorld />
    {randomPlusFive()}
  </div>,
  document.getElementById("root")
);
