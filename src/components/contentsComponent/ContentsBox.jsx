import React, { useState } from "react";
import styled from "styled-components";
import FilterBar from "./filterComponents/FilterBar";
import VideoBox from "./videoBox/VideoBox";

const ContentsBoxWrap = styled.article`
  width: calc(100% - 72px);
  margin-left: 72px;
  padding-top: calc(56px + 56px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 0%, 98%);
`;

const ContentsBox = ({ videoData = {} }) => {
  const [checkTheme, setCheckTheme] = useState("전체");
  // console.log(setCheckTheme);
  // console.log("콘텐츠박스", videoData);
  return (
    <ContentsBoxWrap>
      <FilterBar setCheckTheme={setCheckTheme} />
      <VideoBox
        key={videoData.videoNo}
        videoData={videoData}
        checkTheme={checkTheme}
      />
    </ContentsBoxWrap>
  );
};

export default ContentsBox;
