import React, { memo } from "react";
import styled from "styled-components";
import MenuBox from "./videoExplanaionDetails/MenuBox";
import TitleBox from "./videoExplanaionDetails/TitleBox";
import UserIcon from "./videoExplanaionDetails/UserIcon";

const VideoExplanationWrap = styled.div`
  width: 100%;
  display: flex;
  a {
    width: calc(100% - 48px - 40px);
  }
`;

const VideoExplanaion = memo(({ videoData = {} }) => {
  // console.log("설명박스", videoData);
  return (
    <VideoExplanationWrap>
      <UserIcon videoData={videoData} />
      <TitleBox key={videoData.videoNo} videoData={videoData} />
      <MenuBox />
    </VideoExplanationWrap>
  );
});

export default VideoExplanaion;
