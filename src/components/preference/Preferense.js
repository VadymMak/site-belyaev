import React from "react";

import styled from "@emotion/styled";

import { localization } from "../../constants/localization";
import { colors } from "../../constants/theme";

const Preference = () => {
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
          {localization.preference.preference}
        </h3>
        <span></span>
      </HeaderContainer>
      <ContentContainer>
        <div>Logo</div>
        <div>
          <h5>{localization.preference.savings}</h5>
          <h5>{localization.preference.support}</h5>
          <h5>{localization.preference.assystents}</h5>
          <h5>{localization.preference.persomal}</h5>
          <h5>{localization.preference.service}</h5>
        </div>
      </ContentContainer>
    </Container>
  );
};

export default Preference;

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
