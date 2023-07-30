import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Container>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default RootLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
