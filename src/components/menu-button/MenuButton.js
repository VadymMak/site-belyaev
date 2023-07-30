import React from "react";
import { colors } from "../../constants/theme";
import styled from "@emotion/styled";

const MenuButton = () => {
  return (
    <Container>
      <span></span>
      <span></span>
      <span></span>
    </Container>
  );
};

export default MenuButton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;
  height: 30px;
  background-color: ${colors.background};

  span {
    display: block;
    width: 40px;
    height: 3px;
    background-color: black;
  }
`;
