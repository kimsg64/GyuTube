import React from "react";
import styled from "styled-components";
import FilterBar from "./filterComponents/FilterBar";
import VideoBox from "./videoBox/VideoBox";

const ContentsBoxWrap = styled.article`
  width: calc(100% - 72px);
  margin-left: 72px;
  padding-top: calc(56px + 56px);
`;

const ContentsBox = () => {
  return (
    <ContentsBoxWrap>
      <FilterBar />
      <VideoBox />
    </ContentsBoxWrap>
  );
};

export default ContentsBox;
