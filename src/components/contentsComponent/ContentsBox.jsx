import React from "react";
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

const ContentsBox = ({ videoData }) => {
  console.log("콘텐츠박스", videoData);
  return (
    <ContentsBoxWrap>
      <FilterBar />
      <VideoBox key={videoData.videoNo} videoData={videoData} />
    </ContentsBoxWrap>
  );
};

export default ContentsBox;
