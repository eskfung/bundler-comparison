import React from "react";
import ReactDOM from "react-dom";
import { HelloWorld } from "@bundler-comparison/components-webpack";
// import { HelloWorld } from "@bundler-comparison/components-rollup";

import { randomPlusFive } from "./helpers/randomPlus";

ReactDOM.render(
  <div>
    <HelloWorld />
    {randomPlusFive()}
  </div>,
  document.getElementById("root")
);
