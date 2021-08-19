import React from "react";
import ContentsBox from "./contentsComponent/ContentsBox";
import Header from "./headerComponents/Header";
import Navigator from "./navigatorComponents/Navigator";
import app from "../styles/app.css";
import styled from "styled-components";

const StyledPage = styled.div`
  position: absolute;
  width: 100%;
`;

const Main = () => {
  return (
    <StyledPage>
      <Header />
      <Navigator />
      <ContentsBox />
    </StyledPage>
  );
};

export default Main;
