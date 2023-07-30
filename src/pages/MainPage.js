import React from "react";
import Header from "../components/header/Header";
import { styled } from "styled-components";

import ProposeContainer from "../components/propose-container/ProposeContainer";
import Reference from "../components/reference/Reference";
import Contacts from "../components/contacts/Contacts";
import Preference from "../components/preference/Preferense";
import ContactForm from "../components/contact-form/ContactForm";
import Footer from "../components/footer/Footer";

const MainPage = () => {
  return (
    <Container>
      <Header />
      <Reference />
      <ProposeContainer />
      <Contacts />
      <Preference />
      <ContactForm />
      <Footer />
    </Container>
  );
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
