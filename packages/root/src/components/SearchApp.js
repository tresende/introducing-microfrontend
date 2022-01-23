import React, { useRef, useEffect } from "react";

import { mount } from "search/SearchApp";

const SearchApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default SearchApp;
