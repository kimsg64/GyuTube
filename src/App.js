import React from "react";
import ContentsBox from "./components/contentsComponent/ContentsBox";
import Header from "./components/headerComponents/Header";
import Navigator from "./components/navigatorComponents/Navigator";
import app from "./styles/app.css";

const App = () => {
  return (
    <>
      <Header />
      <Navigator />
      <ContentsBox />
    </>
  );
};

export default App;
