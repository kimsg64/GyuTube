import React from "react";
import ContentsBox from "./contentsComponent/ContentsBox";
import Header from "./headerComponents/Header";
import Navigator from "./navigatorComponents/Navigator";
import app from "../styles/app.css";
import styled from "styled-components";

const HomeWrap = styled.div`
  display: block;
`;

const Main = () => {
  return (
    // 여기를 감쌀 flex div가 필요함
    <HomeWrap>
      <Header />
      <Navigator />
      <ContentsBox />
    </HomeWrap>
  );
};

export default Main;
