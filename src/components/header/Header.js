import React from "react";

import MenuButton from "../menu-button/MenuButton";
import { styled } from "styled-components";

const Header = () => {
  return (
    <Container>
      <div>
        <h3>NIKOLAY BELYAEV</h3>
      </div>
      <MenuButton />
    </Container>
  );
};

export default Header;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 18px 14px 30px;
`;
