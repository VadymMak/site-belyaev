import React from "react";

import styled from "./PersonalCard.module.scss";

import circleCheck from "../../../assets/icons/circleCheck.svg";

const PersonalCard = ({ id, title }) => {
  return (
    <div className={styled["card-container"]}>
      <div className={styled["card-container__img-container"]}>
        <img src={circleCheck} alt="circle_check" />
      </div>
      <div className={styled["card-container__cont-container"]}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default PersonalCard;
