import React from "react";

import styled from "./ServiceCard.module.scss";

const ServiceCard = ({ id, img_sm, IMG, title, desc }) => {
  return (
    <div className={styled.card}>
      <div
        className={styled["card__image"]}
        style={{
          backgroundImage: `url(${img_sm})`,
        }}
      >
        <img src={IMG} alt={`${id} logo`} loading="lazy" />
      </div>
      <div className={styled["card__description"]}>
        <div className={styled["card__description-title"]}>
          <h3>{title}</h3>
        </div>
        <div className={styled["card__description-description"]}>
          <h4>{desc}</h4>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
