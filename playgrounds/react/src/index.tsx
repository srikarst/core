import React from "react";
import ReactDOM from "react-dom";

import { Margin, Text } from "@ds.e/react";

import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/Margin.css";

ReactDOM.render(
  <Margin>
    <Text size="xs">This is some text</Text>
  </Margin>,
  document.querySelector("#root")
);
