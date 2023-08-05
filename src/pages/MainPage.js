import React from "react";
import Header from "../components/header/Header";

import styled from "./MainPage.module.scss";
import Service from "../components/service/Service";
import ServicePersonal from "../components/service-personal/ServicePersonal";
import Footer from "../components/footer/Footer";

const MainPage = () => {
  return (
    <div className={styled["main-container"]}>
      <Header />
      <Service />
      <ServicePersonal />
      <Footer />
    </div>
  );
};

export default MainPage;
