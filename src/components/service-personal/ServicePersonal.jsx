import React from "react";

import styled from "./ServicePersonal.module.scss";

import carpat_500 from "../../assets/images/carpat_520.png";
import carpat_1200 from "../../assets/images/carpat_1200.png";

import { localization } from "../../constants/localization";
import PersonalCard from "./personal-card/PersonalCard";

const ServicePersonal = () => {
  return (
    <div className={styled["service-personal"]}>
      <div className={styled["service-personal__pic-wrapper"]}>
        <picture>
          <source media="(max-width: 500px)" srcSet={carpat_500} />
          <img src={carpat_1200} alt="Carpat mountain" loading="lazy" />
        </picture>
      </div>

      <div className={styled["service-personal__cont-wrapper"]}>
        <h1>{localization.title.service}</h1>
        {localization.content.map((item) => (
          <PersonalCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ServicePersonal;
