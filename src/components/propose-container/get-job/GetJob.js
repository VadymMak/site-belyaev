import React from "react";
import { styled } from "styled-components";
import { colors, typography } from "../../../constants/theme";

const GetJob = ({ title, reference }) => {
  return (
    <Container>
      <div>Logo</div>
      <h3 style={{ color: "black", textAlign: "center" }}>{title}</h3>
      <h5
        style={{
          color: `${colors.dark_grey}`,
          fontSize: `${typography.mob.main_3}`,
          textAlign: "center",
        }}
      >
        {reference}
      </h5>
    </Container>
  );
};

export default GetJob;

const Container = styled.div`
  padding: 10px;
  width: 90%;
  height: 245px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: yellow;
  border-radius: 30px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
