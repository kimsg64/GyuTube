import React from "react";
import VideoBtns from "./videoDetails/VideoBtns";
import ViewAndDate from "./videoDetails/ViewAndDate";
import styled from "styled-components";

const VideoInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  color: hsl(0, 0%, 40%);
  .fas {
    color: hsl(0, 0%, 56%);
  }
`;

const VideoInfo = ({
  videoViews = "",
  videoUploadDate = "",
  videoThumbUp = "",
  videoThumbDown = "",
}) => {
  console.log("비디오정보", videoViews, videoUploadDate);
  return (
    <VideoInfoWrap>
      <ViewAndDate videoViews={videoViews} videoUploadDate={videoUploadDate} />
      <VideoBtns videoThumbUp={videoThumbUp} videoThumbDown={videoThumbDown} />
    </VideoInfoWrap>
  );
};

export default VideoInfo;
