import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem;
  border: 2px dashed lightgrey;
`;

export const Item = styled.div`
  display: inline-block;
  border: 1px solid black;
  padding: 1rem;
  height: 8rem;
  width: 8rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
`;
