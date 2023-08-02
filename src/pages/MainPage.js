import React from "react";
import Header from "../components/header/Header";

import styled from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styled["main-container"]}>
      <Header />
    </div>
  );
};

export default MainPage;
