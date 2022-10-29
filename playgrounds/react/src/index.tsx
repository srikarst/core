import React from "react";
import ReactDOM from "react-dom";

import { Margin, Select } from "@ds.e/react";

import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/Margin.css";

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

ReactDOM.render(
  <Margin>
    <Select options={options} />
  </Margin>,
  document.querySelector("#root")
);
