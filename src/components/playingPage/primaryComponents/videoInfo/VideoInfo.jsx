import React from "react";
import VideoBtns from "./videoDetails/VideoBtns";
import ViewAndDate from "./videoDetails/ViewAndDate";
import styled from "styled-components";

const VideoInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const VideoInfo = () => {
  return (
    <VideoInfoWrap>
      <ViewAndDate></ViewAndDate>
      <VideoBtns></VideoBtns>
    </VideoInfoWrap>
  );
};

export default VideoInfo;
