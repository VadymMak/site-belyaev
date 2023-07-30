import React from "react";

import styled from "@emotion/styled";
import { localization } from "../../constants/localization";
import { colors } from "../../constants/theme";

const ContactForm = () => {
  return (
    <Container>
      <ReferenceContainer>
        <h3 style={{ color: `${colors.background}` }}>
          {localization.quetions.quetions}
        </h3>
        <h5 style={{ margin: 0, color: `${colors.background}` }}>
          {localization.quetions.ifQuetion}
        </h5>
        <h5 style={{ margin: 0, color: `${colors.background}` }}>
          {localization.quetions.willContact}
        </h5>
      </ReferenceContainer>
      <Form>
        <input type="text" id="name" placeholder="Your name" />
        <input type="phone" id="phone" placeholder="Your phone" />
        <button>Get a call</button>
      </Form>
    </Container>
  );
};

export default ContactForm;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.active};
  padding: 0 10px 10px;
`;

const ReferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    margin-top: 10px;
    height: 30px;
    width: 100%;
    @media (min-width: 760px) {
      width: 90%;
      margin-top: 0;
      margin-right: 5px;
    }
  }
  button {
    background-color: ${colors.background};
    outline: none;
    width: 100%;
    height: 30px;
    margin: 10px 0 10px 0;
    @media (min-width: 760px) {
      width: 90%;
      margin-top: 0;
      margin-right: 5px;
    }
  }

  @media (min-width: 760px) {
    flex-direction: row;
  }
`;
