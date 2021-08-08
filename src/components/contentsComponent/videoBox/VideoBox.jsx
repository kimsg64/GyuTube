import React from "react";
import VideoSummary from "./videoSummary/VideoSummary";
import styled from "styled-components";

const VideoBoxWrap = styled.ul`
  margin-top: 24px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const VideoBox = () => {
  return (
    <VideoBoxWrap>
      {/* VideoSummary를 li로 하면 될듯? */}
      <VideoSummary></VideoSummary>
      <VideoSummary></VideoSummary>
      <VideoSummary></VideoSummary>
      <VideoSummary></VideoSummary>
      <VideoSummary></VideoSummary>
      <VideoSummary></VideoSummary>
      <VideoSummary></VideoSummary>
      <VideoSummary></VideoSummary>
    </VideoBoxWrap>
  );
};

export default VideoBox;
