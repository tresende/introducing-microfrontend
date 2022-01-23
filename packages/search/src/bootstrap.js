import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => ReactDOM.render(<App />, el);

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#search-root");

  el && mount(el);
}

export { mount };
