import React from "react";
import styled from "styled-components";
import MenuBox from "./videoExplanaionDetails/MenuBox";
import TitleBox from "./videoExplanaionDetails/TitleBox";
import UserIcon from "./videoExplanaionDetails/UserIcon";

const VideoExplanationWrap = styled.div`
  width: 100%;
  display: flex;
`;

const VideoExplanaion = ({ videoData }) => {
  console.log("설명박스", videoData);
  return (
    <VideoExplanationWrap>
      <UserIcon videoData={videoData} />
      <TitleBox videoData={videoData} />
      <MenuBox />
    </VideoExplanationWrap>
  );
};

export default VideoExplanaion;
