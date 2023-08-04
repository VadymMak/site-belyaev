import React, { useState, useEffect } from "react";

import styled from "./Header.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faViber,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import logo_right from "../../assets/images/header_top_right.svg";
import logo_left from "../../assets/images/header_bottom_left.svg";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <div className={styled.header}>
        {width < 1200 ? (
          <div className={styled["header__logo"]}>
            <div className={styled["header__logo-container"]}>
              <img
                className={styled["header__logo-container-img"]}
                src={logo_left}
                alt="logo_left"
              />
            </div>
            <div className={styled["header__logo-title"]}>
              <h1>NIKOLAY</h1>
              <h1>BIELIAIEV</h1>
            </div>
          </div>
        ) : (
          <div className={styled["header__logo"]}>
            <div className={styled["header__logo-container"]}>
              <div className={styled["header__logo-title"]}>
                <h1>NIKOLAY</h1>
                <h1>BIELIAIEV</h1>
              </div>
              <div className={styled["header__logo-container-image"]}>
                <img
                  className={styled["header__logo-container-img"]}
                  src={logo_left}
                  alt="logo_left"
                />
              </div>
            </div>
          </div>
        )}

        <div className={styled["header__card"]}>
          <div className={styled["header__card-title"]}>
            <div className={styled["header__card-title-contacts"]}>
              <h3>+38(095)4066250</h3>
              <h3>hello@loftpinapple.com</h3>
            </div>
            <div className={styled["header__card-title-social"]}>
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faViber} />
              </a>
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </div>
          </div>
          <div className={styled["header__card-container"]}>
            <img
              className={styled["header__card-logo"]}
              src={logo_right}
              alt="logo"
            />
          </div>
        </div>

        <span className={styled["header__separator"]}></span>
      </div>
    </>
  );
};

export default Header;
