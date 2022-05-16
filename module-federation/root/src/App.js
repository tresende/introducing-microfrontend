import React, { lazy, Suspense } from "react";

const Search = lazy(() => import("./components/SearchApp"));

const App = () => {
  return (
    <>
      <h1>Home</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Search />
      </Suspense>
    </>
  );
};

export default App;
