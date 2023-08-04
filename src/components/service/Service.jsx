import React from "react";

import styled from "./Service.module.scss";
import { localization } from "../../constants/localization";

import { card } from "../../constants/card-content";
import ServiceCard from "./service-card/ServiceCard";

const Service = () => {
  return (
    <div className={styled.service}>
      <div className={styled.service__title}>
        <h1>{localization.title.plessure}</h1>
        <div>
          {card.map((card) => (
            <ServiceCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
