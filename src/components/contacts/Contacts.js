import React from "react";

import styled from "@emotion/styled";

import { localization } from "../../constants/localization";
import { colors } from "../../constants/theme";

const Contacts = () => {
  return (
    <Container>
      <HeaderContainer>
        <span></span>
        <h3
          style={{
            textAlign: "center",
            width: "100%",
            color: `${colors.background}`,
          }}
        >
          {localization.contacts.contacts}
        </h3>
        <span></span>
      </HeaderContainer>
      <ContentContainer>
        <h3>Phone: 123345566666</h3>
        <h3>Mail: dog@dog.com</h3>
      </ContentContainer>
    </Container>
  );
};

export default Contacts;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${colors.active};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  span {
    position: absolute;
    display: block;
    height: 2px;
    width: 30%;
    background-color: ${colors.background};
    top: 35px;
    &:first-child {
      left: 10px;
    }
    &:last-child {
      right: 10px;
    }
  }
`;
const ContentContainer = styled.div`
  width: 100%;
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 760px) {
    flex-direction: row;
  }
`;
