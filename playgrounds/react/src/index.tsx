import React from "react";
import ReactDOM from "react-dom";

import { Margin, Select } from "@srikar-ds.e/react";

import "@srikar-ds.e/scss/lib/Utilities.css";
import "@srikar-ds.e/scss/lib/Margin.css";
import "@srikar-ds.e/scss/lib/Select.css";
import "@srikar-ds.e/scss/lib/global.css";

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
  <div style={{ padding: "40px" }}>
    <Select options={options} />
  </div>,
  document.querySelector("#root")
);
