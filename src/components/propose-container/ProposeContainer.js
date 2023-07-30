import React from "react";
import styled from "@emotion/styled";

import { colors } from "../../constants/theme";

import { localization } from "../../constants/localization";

import GetJob from "./get-job/GetJob";
import GetStaus from "./get-status/GetStaus";
import Service from "./service/Service";

const ProposeContainer = () => {
  return (
    <Container>
      <div>
        <span></span>
        <h3>ПРАЦЕВЛАШТУВАННЯ</h3>
        <span></span>
      </div>
      <ComponentContainer>
        <GetStaus
          title={localization.title.status}
          reference={localization.content.status}
        />
        <GetJob
          title={localization.title.job}
          reference={localization.content.job}
        />
        <Service
          title={localization.title.service}
          reference={localization.content.sercice}
        />
      </ComponentContainer>
    </Container>
  );
};

export default ProposeContainer;

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: ${colors.active};
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    h3 {
      color: ${colors.background};
    }
    span:first-child {
      display: block;
      position: absolute;
      top: 40px;
      left: 10px;
      width: 10%;
      height: 2px;
      background-color: ${colors.background};
    }
    span:last-child {
      display: block;
      position: absolute;
      top: 40px;
      right: 10px;
      width: 10%;
      height: 2px;
      background-color: ${colors.background};
    }
    @media (min-width: 420px) {
      span:first-child {
        width: 15%;
      }

      span:last-child {
        width: 15%;
      }
    }
    @media (min-width: 500px) {
      span:first-child {
        width: 20%;
      }

      span:last-child {
        width: 20%;
      }
    }

    @media (min-width: 650px) {
      span:first-child {
        width: 25%;
      }

      span:last-child {
        width: 25%;
      }
    }
    @media (min-width: 760px) {
      margin: 10px;
    }
  }
`;

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 760px) {
    flex-direction: row;
  }
`;
