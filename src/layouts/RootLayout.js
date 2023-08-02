import styled from "./RootLayout.module.scss";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className={styled["root-layout"]}>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
