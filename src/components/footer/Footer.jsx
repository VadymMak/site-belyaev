import React from "react";

import styled from "./Footer.module.scss";

import trenchin_1200 from "../../assets/images/trenchin_1200.png";
import trenchin_820 from "../../assets/images/trenchin_820.png";
import trenchin_420 from "../../assets/images/trenchin_420.png";
import FooterForm from "./footer-form/FooterForm";

const Footer = () => {
  return (
    <div className={styled.footer}>
      <div className={styled["footer__img-container"]}>
        <picture>
          <source media="(max-width: 419)" srcSet={trenchin_420} />
          <source media="(max-width: 819)" srcSet={trenchin_820} />
          <img src={trenchin_1200} alt="Carpat mountain" loading="lazy" />
        </picture>
      </div>
      <div className={styled["footer__footer-container"]}>
        <h1>CONTACT US</h1>
        <FooterForm />
      </div>
    </div>
  );
};

export default Footer;
