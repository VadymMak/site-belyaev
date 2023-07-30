import React from "react";
import styled from "@emotion/styled";

import { colors, typography } from "../../../constants/theme";

const GetStaus = ({ title, reference }) => {
  return (
    <Container>
      <div>Logo</div>
      <h3>{title}</h3>
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

export default GetStaus;

const Container = styled.div`
  width: 90%;
  padding: 10px;
  height: 245px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 760px) {
  }
`;
