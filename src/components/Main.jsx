import React from "react";
import ContentsBox from "./contentsComponent/ContentsBox";
import Header from "./headerComponents/Header";
import Navigator from "./navigatorComponents/Navigator";
import app from "../styles/app.css";

const Main = () => {
  return (
    <>
      <Header />
      <Navigator />
      <ContentsBox />
    </>
  );
};

export default Main;
