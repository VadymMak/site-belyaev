import React from "react";

import styled from "./Header.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faViber,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => (
  <>
    <div className={styled.header}>
      <div className={styled["header__logo"]}>
        <h1>NIKOLAY</h1>
        <h1>BIELIAIEV</h1>
      </div>
      <div className={styled["header__card"]}>
        <div className={styled["header__card-contacts"]}>
          <h3>+38(095)4066250</h3>
          <h3>hello@loftpinapple.com</h3>
        </div>
        <div className={styled["header__card-social"]}>
          <a href="https://facebook.con">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://facebook.con">
            <FontAwesomeIcon icon={faViber} />
          </a>
          <a href="https://facebook.con">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
      </div>
      <span className={styled.separator}></span>
    </div>
  </>
);

export default Header;
