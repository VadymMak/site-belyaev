import React from "react";
import Header from "../components/header/Header";

import styled from "./MainPage.module.scss";
import Service from "../components/service/Service";

const MainPage = () => {
  return (
    <div className={styled["main-container"]}>
      <Header />
      <Service />
    </div>
  );
};

export default MainPage;
