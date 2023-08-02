import React from "react";
import { styled } from "styled-components";

const MainPage = () => {
  return <Container></Container>;
};

export default MainPage;

const Container = styled.div`
  display: flex;
  width: 320px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 420px) {
    width: 100%;
    padding: 0 34px;
  }
`;
