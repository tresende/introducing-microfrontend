import React, { lazy, Suspense } from "react";
import GlobalStyle from "./globalStyles";

import ListContainer from "./components/ListContainer";

const App = () => {
  const handleChange = (e) => {
    const text = e.target.value;
    document.dispatchEvent(new CustomEvent("LIST:TYPE", { detail: text }));
  };

  return (
    <>
      <GlobalStyle />
      <div id="main">
        <input placeholder="Search" type="text" onChange={handleChange} />
      </div>
      <ListContainer />
    </>
  );
};

export default App;
