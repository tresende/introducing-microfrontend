import React, { useRef, useEffect } from "react";

import { mount } from "list/ListModule";
//nome mf configurado no remotes/modulo

const ListContainer = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current); //incializa o mf no main
  }, []);

  return <div ref={ref} />;
};

export default ListContainer;
