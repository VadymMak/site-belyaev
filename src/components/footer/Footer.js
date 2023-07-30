import React from "react";

import styled from "@emotion/styled";
import { localization } from "../../constants/localization";
import { colors, typography } from "../../constants/theme";

const Footer = () => {
  return (
    <Container>
      <Notification>
        <h5>{localization.service.service}</h5>
        <h3>{localization.service.status}</h3>
        <h3>{localization.service.findJob}</h3>
        <h3>{localization.service.aditional}</h3>
      </Notification>
      <About>
        <h5>{localization.company.company}</h5>
        <h3>{localization.company.about}</h3>
        <h3>{localization.company.contact}</h3>
      </About>
      <Social></Social>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  background-color: ${colors.dark_grey};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 10px 30px 10px;

  @media (min-width: 760px) {
    flex-direction: row;
  }
`;

const Notification = styled.div`
  h5 {
    color: ${colors.background};
    margin: 2px;
    font-size: ${typography.mob.main_3}px;
    margin-bottom: 10px;
  }
  h3 {
    color: ${colors.background};
    margin: 2px;
    font-size: ${typography.mob.main_4}px;
  }
`;

const About = styled.div`
  h5 {
    color: ${colors.background};
    margin-top: 10px;
    font-size: ${typography.mob.main_3}px;
    margin-bottom: 10px;
  }
  h3 {
    color: ${colors.background};
    margin: 0;
    font-size: ${typography.mob.main_4}px;
  }
`;

const Social = styled.div``;
