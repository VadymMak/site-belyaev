import React from "react";

import ImageContainer from "../image-container/ImageContainer";
import RefContainer from "../ref-container/RefContainer";

import styled from "@emotion/styled";

import sampleImage from "../../assets/images/a7f95bc098cada4e4dc955fb5fd393fb.png";

import { localization } from "../../constants/localization";

const Reference = () => {
  return (
    <Container>
      <ImageContainer img={sampleImage} />
      <RefContainer
        title={localization.title.title}
        content={localization.content.propouse}
      />
    </Container>
  );
};

export default Reference;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 420px) {
    flex-direction: row;
  }
`;
