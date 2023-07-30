import React from "react";
import styled from "@emotion/styled";

const ImageContainer = ({ img }) => {
  console.log(img);
  return <Container img={img}></Container>;
};

export default ImageContainer;

const Container = styled.div`
  width: 100%;
  height: 245px;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.img});
`;
