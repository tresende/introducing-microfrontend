import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => ReactDOM.render(<App />, el);

// Se eu estiver em modo de desenvolvimento eu posso rodar
// a aplicação complementamente isolada
// http://localhost:3001
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#list-root");
  el && mount(el); //inicializa microfrontend
}

export const funcaoQueNaoDeveriaSerBuildada = () => {
  console.log("oops");
};

export { mount };
