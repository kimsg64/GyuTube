import React from "react";
import styled from "styled-components";
import MenuBox from "../../../../contentsComponent/videoBox/videoSummary/videoExplanaion/videoExplanaionDetails/MenuBox";
import HeaderUserInfo from "../../../../headerComponents/headerBtns/headerUserInfo/HeaderUserInfo";
import VideoCommentsLeaveComment from "../videoCommentsLeaveComment/VideoCommentsLeaveComment";

const VideoCommentsContentWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  background-color: yellow;
`;

const CommentWrap = styled.div`
  :hover {
    cursor: pointer;
  }
  :hover .fa-ellipsis-v {
    display: flex;
  }
  display: flex;
  flex-direction: column;
`;

const NameBox = styled.div``;

const CommentContent = styled.div``;

const Icons = styled.div`
  display: flex;
  height: 36px;
  align-items: center;
  color: hsl(0, 0%, 56%);
`;

const VideoCommentsContent = () => {
  return (
    <VideoCommentsContentWrap>
      <HeaderUserInfo />
      <CommentWrap>
        <NameBox>
          <div>승우엄마</div>
          <div>5일 전</div>
        </NameBox>
        <CommentContent>
          <div>이게 가장 좋습니다!</div>
        </CommentContent>
        <Icons>
          <i className="fas fa-thumbs-up"></i>
          <div>10</div>
          <i className="fas fa-thumbs-down"></i>
          <div>2</div>
          <div>답글</div>
        </Icons>
        <VideoCommentsLeaveComment />
      </CommentWrap>
      <MenuBox />
    </VideoCommentsContentWrap>
  );
};

export default VideoCommentsContent;
