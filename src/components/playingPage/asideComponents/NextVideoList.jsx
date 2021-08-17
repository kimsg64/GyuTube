import React from "react";
import styled from "styled-components";
import VideoSummary from "../../contentsComponent/videoBox/videoSummary/VideoSummary";

const NextVideoListWrap = styled.aside`
  display: flex;
  flex-direction: column;
`;

const NextVideoList = () => {
  return (
    <NextVideoListWrap>
      <VideoSummary />
    </NextVideoListWrap>
  );
};

export default NextVideoList;
