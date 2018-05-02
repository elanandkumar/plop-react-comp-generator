/***  examples/src/index.js ***/
import React from "react";
import ReactDOM from "react-dom";
import ##__COMP_NAME__## from "./index.comp";

const wrapperNodes = document.querySelectorAll('[data-comp="##__COMP_NAME__##"]');

if (wrapperNodes) {
  const element = wrapperNodes[0];
  ReactDOM.hydrate(<##__COMP_NAME__## />, element, () => {
    console.log(`Client side paint complete for ${element.dataset.component}!`); //eslint-disable-line
  });
}
