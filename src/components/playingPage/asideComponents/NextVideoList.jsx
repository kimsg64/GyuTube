import React from "react";
import styled from "styled-components";
import VideoSummary from "../../contentsComponent/videoBox/videoSummary/VideoSummary";

const NextVideoListWrap = styled.aside`
  display: flex;
  flex-direction: column;
`;

const OneVideo = styled.div`
  height: 94px;
`;

// 비디오 크기 아래로 고정
// width: 168px;
// height: 94px;

const NextVideoList = () => {
  return <NextVideoListWrap>{/* <VideoSummary /> */}</NextVideoListWrap>;
};

export default NextVideoList;
