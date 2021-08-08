import React from "react";
import styled from "styled-components";
import VideoExplanaion from "./videoExplanaion/VideoExplanaion";

const VideoBoxWrap = styled.li`
  list-style: none;
  width: 274px;
  height: 300px;
  margin: 0 8px 40px 8px;
  video {
    width: 100%;
  }
  :hover {
    cursor: pointer;
  }
  :hover .fa-ellipsis-v {
    display: flex;
  }
`;

const VideoSummary = () => {
  return (
    <VideoBoxWrap>
      <video src="././././videos/Cat.mp4" />
      <VideoExplanaion />
    </VideoBoxWrap>
  );
};

export default VideoSummary;
