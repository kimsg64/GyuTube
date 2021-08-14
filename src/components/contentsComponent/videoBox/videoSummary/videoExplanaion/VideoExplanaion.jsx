import React from "react";
import styled from "styled-components";
import MenuBox from "./videoExplanaionDetails/MenuBox";
import TitleBox from "./videoExplanaionDetails/TitleBox";
import UserIcon from "./videoExplanaionDetails/UserIcon";

const VideoExplanationWrap = styled.div`
  width: 100%;
  display: flex;
`;

const VideoExplanaion = () => {
  return (
    <VideoExplanationWrap>
      <UserIcon />
      <TitleBox />
      <MenuBox />
    </VideoExplanationWrap>
  );
};

export default VideoExplanaion;
