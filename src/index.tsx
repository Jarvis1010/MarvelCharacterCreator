import * as React from "react";
import { render } from "react-dom";
import { GlobalStyles } from "./GlobalStyles";
import { AppBoundary } from "@bedrock-layout/appboundary";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <GlobalStyles />
    <AppBoundary>
      <App />
    </AppBoundary>
  </React.StrictMode>,
  rootElement
);
