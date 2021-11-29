import React, { useState } from "react";
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
  const [searchedByKeyword, setSearchedByKeyword] = useState([]);
  const videoData =
    searchedByKeyword.length === 0 ? VideoData.videos : searchedByKeyword;
  // console.log("메인", videoData);
  // console.log(searchedByKeyword);
  return (
    <StyledPage>
      <Header setSearchedByKeyword={setSearchedByKeyword} />
      <Navigator />
      <ContentsBox key={videoData.videoNo} videoData={videoData} />
    </StyledPage>
  );
};

export default Main;
