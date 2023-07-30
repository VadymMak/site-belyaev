import styled from "@emotion/styled";
import { typography } from "../../constants/theme";
import React from "react";

const RefContainer = ({ title, content }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <span></span>
      <h5>{content}</h5>
    </Container>
  );
};

export default RefContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 245px;
  h3 {
    font-size: ${typography.desc.main_3};
  }
  h5 {
    font-size: ${typography.desc.main_5};
    font-weight: 100;
  }
  span {
    width: 100%;
    height: 2px;
    background-color: #000;
  }
`;
