import React from "react";
import VideoCommentsContent from "./videoCommentsContent/VideoCommentsContent";
import VideoCommentsHeader from "./videoCommentsHeader/VideoCommentsHeader";
import styled from "styled-components";

const VideoCommentsWrap = styled.div`
  margin: 24px 0 32px 0;
`;

const VideoComments = () => {
  return (
    <VideoCommentsWrap>
      <VideoCommentsHeader></VideoCommentsHeader>
      <VideoCommentsContent></VideoCommentsContent>
    </VideoCommentsWrap>
  );
};

export default VideoComments;
