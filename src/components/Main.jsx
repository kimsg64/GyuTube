import React from "react";
import ContentsBox from "./contentsComponent/ContentsBox";
import Header from "./headerComponents/Header";
import Navigator from "./navigatorComponents/Navigator";
import app from "../styles/app.css";
import styled from "styled-components";
import VideoData from "../DB/VideoData.json";

const StyledPage = styled.div`
  position: absolute;
  width: 100%;
`;

const Main = () => {
  const videoData = VideoData.videos;
  console.log("메인", videoData);
  return (
    <StyledPage>
      <Header />
      <Navigator />
      <ContentsBox key={videoData.videoNo} videoData={videoData} />
    </StyledPage>
  );
};

export default Main;
