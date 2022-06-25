import React, { useEffect, useState } from "react";
import * as S from "./styles";

const items = [
  "javascript",
  "typescript",
  "node",
  "rust",
  "kotlin",
  "cloujure",
  "java",
  "lua",
  "php",
];

const EVENT_NAME = "LIST:TYPE";

const List = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    document.addEventListener(EVENT_NAME, ({ detail }) => setTerm(detail));

    return document.removeEventListener(EVENT_NAME, setTerm);
  }, []);

  const filtred = term
    ? items.filter((item) => item.includes(term.toLowerCase()))
    : items;

  return (
    <S.Wrapper>
      {filtred.map((item) => (
        <S.Item key={item}>{item}</S.Item>
      ))}
    </S.Wrapper>
  );
};

export default List;
