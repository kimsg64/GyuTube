import React from "react";
import styled from "styled-components";
import MenuBox from "../../../../contentsComponent/videoBox/videoSummary/videoExplanaion/videoExplanaionDetails/MenuBox";
import HeaderUserInfo from "../../../../headerComponents/headerBtns/headerUserInfo/HeaderUserInfo";
import VideoCommentsLeaveComment from "../videoCommentsLeaveComment/VideoCommentsLeaveComment";

const VideoCommentsContentWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const VideoCommentsContentBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 16px;
`;

const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  :hover .fa-ellipsis-v {
    display: flex;
  }
`;

const PinBox = styled.div`
  color: hsl(0, 0%, 38%);
  height: 18px;
  font-size: 12px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  .fas {
    width: 16px;
    height: 16px;
    font-size: 10px;
    margin-right: 4px;
    padding-top: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const NameBox = styled.div`
  font-size: 13px;
  display: flex;
`;

const DateWrap = styled.div`
  margin-left: 4px;
  color: hsl(0, 0%, 38%);
  :hover {
    color: black;
    cursor: pointer;
  }
  .fas {
    margin-right: 4px;
  }
`;

const CommentContent = styled.div`
  width: 100%;
  font-size: 13px;
  margin-top: 4px;
`;

const IconsWrap = styled.div`
  height: 36px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  color: hsl(0, 0%, 56%);
  box-sizing: border-box;
`;

const LikeBox = styled.div`
  display: flex;
  align-items: center;
`;

const LikeIcon = styled.div`
  /* 왼쪽으로 4~8px 옮겨야 함... */
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  .fas {
    color: hsl(0, 0%, 56%);
    font-size: 14px;
    :hover {
      color: hsl(0, 0%, 38%);
    }
  }
`;

const LikeNumber = styled.div`
  font-size: 14px;
  color: hsl(0, 0%, 38%);
  margin-right: 8px;
`;

const ReplyBox = styled.div`
  width: 66px;
  padding: 8px 16px;
  font-size: 13px;
  color: hsl(0, 0%, 38%);
  :hover {
    cursor: pointer;
  }
`;

const VideoCommentsContent = () => {
  return (
    <VideoCommentsContentWrap>
      <VideoCommentsContentBox>
        <HeaderUserInfo />
        <CommentWrap>
          <PinBox>
            <i className="fas fa-thumbtack"></i>
            <div>규튜브님이 고정함</div>
          </PinBox>
          <NameBox>
            <div>승우엄마</div>
            <DateWrap>
              <i class="fas fa-check"></i>
              5일 전
            </DateWrap>
          </NameBox>
          <CommentContent>
            <div>이게 가장 좋습니다!</div>
          </CommentContent>
          <IconsWrap>
            <LikeBox>
              <LikeIcon className="globalIconBtn">
                <i className="fas fa-thumbs-up"></i>
              </LikeIcon>
              <LikeNumber>10</LikeNumber>
            </LikeBox>
            <LikeBox>
              <LikeIcon className="globalIconBtn">
                <i className="fas fa-thumbs-down"></i>
              </LikeIcon>
              <LikeNumber>2</LikeNumber>
            </LikeBox>
            <ReplyBox>답글</ReplyBox>
          </IconsWrap>
          {/* 얘는 답글 클릭시 나타날 것 */}
          {/* <VideoCommentsLeaveComment /> */}
        </CommentWrap>
        <MenuBox />
      </VideoCommentsContentBox>
      <VideoCommentsContentBox>
        <HeaderUserInfo />
        <CommentWrap>
          <PinBox>
            <i className="fas fa-thumbtack"></i>
            <div>규튜브님이 고정함</div>
          </PinBox>
          <NameBox>
            <div>승우엄마</div>
            <DateWrap>
              <i class="fas fa-check"></i>
              5일 전
            </DateWrap>
          </NameBox>
          <CommentContent>
            <div>이게 가장 좋습니다!</div>
          </CommentContent>
          <IconsWrap>
            <LikeBox>
              <LikeIcon className="globalIconBtn">
                <i className="fas fa-thumbs-up"></i>
              </LikeIcon>
              <LikeNumber>10</LikeNumber>
            </LikeBox>
            <LikeBox>
              <LikeIcon className="globalIconBtn">
                <i className="fas fa-thumbs-down"></i>
              </LikeIcon>
              <LikeNumber>2</LikeNumber>
            </LikeBox>
            <ReplyBox>답글</ReplyBox>
          </IconsWrap>
          {/* 얘는 답글 클릭시 나타날 것 */}
          {/* <VideoCommentsLeaveComment /> */}
        </CommentWrap>
        <MenuBox />
      </VideoCommentsContentBox>
      <VideoCommentsContentBox>
        <HeaderUserInfo />
        <CommentWrap>
          <PinBox>
            <i className="fas fa-thumbtack"></i>
            <div>규튜브님이 고정함</div>
          </PinBox>
          <NameBox>
            <div>승우엄마</div>
            <DateWrap>
              <i class="fas fa-check"></i>
              5일 전
            </DateWrap>
          </NameBox>
          <CommentContent>
            <div>이게 가장 좋습니다!</div>
          </CommentContent>
          <IconsWrap>
            <LikeBox>
              <LikeIcon className="globalIconBtn">
                <i className="fas fa-thumbs-up"></i>
              </LikeIcon>
              <LikeNumber>10</LikeNumber>
            </LikeBox>
            <LikeBox>
              <LikeIcon className="globalIconBtn">
                <i className="fas fa-thumbs-down"></i>
              </LikeIcon>
              <LikeNumber>2</LikeNumber>
            </LikeBox>
            <ReplyBox>답글</ReplyBox>
          </IconsWrap>
          {/* 얘는 답글 클릭시 나타날 것 */}
          {/* <VideoCommentsLeaveComment /> */}
        </CommentWrap>
        <MenuBox />
      </VideoCommentsContentBox>
      <VideoCommentsContentBox>
        <HeaderUserInfo />
        <CommentWrap>
          <PinBox>
            <i className="fas fa-thumbtack"></i>
            <div>규튜브님이 고정함</div>
          </PinBox>
          <NameBox>
            <div>승우엄마</div>
            <DateWrap>
              <i class="fas fa-check"></i>
              5일 전
            </DateWrap>
          </NameBox>
          <CommentContent>
            <div>이게 가장 좋습니다!</div>
          </CommentContent>
          <IconsWrap>
            <LikeBox>
              <LikeIcon className="globalIconBtn">
                <i className="fas fa-thumbs-up"></i>
              </LikeIcon>
              <LikeNumber>10</LikeNumber>
            </LikeBox>
            <LikeBox>
              <LikeIcon className="globalIconBtn">
                <i className="fas fa-thumbs-down"></i>
              </LikeIcon>
              <LikeNumber>2</LikeNumber>
            </LikeBox>
            <ReplyBox>답글</ReplyBox>
          </IconsWrap>
          {/* 얘는 답글 클릭시 나타날 것 */}
          {/* <VideoCommentsLeaveComment /> */}
        </CommentWrap>
        <MenuBox />
      </VideoCommentsContentBox>
      <VideoCommentsContentBox>
        <HeaderUserInfo />
        <CommentWrap>
          <PinBox>
            <i className="fas fa-thumbtack"></i>
            <div>규튜브님이 고정함</div>
          </PinBox>
          <NameBox>
            <div>승우엄마</div>
            <DateWrap>
              <i class="fas fa-check"></i>
              5일 전
            </DateWrap>
          </NameBox>
          <CommentContent>
            <div>이게 가장 좋습니다!</div>
          </CommentContent>
          <IconsWrap>
            <LikeBox>
              <LikeIcon className="globalIconBtn">
                <i className="fas fa-thumbs-up"></i>
              </LikeIcon>
              <LikeNumber>10</LikeNumber>
            </LikeBox>
            <LikeBox>
              <LikeIcon className="globalIconBtn">
                <i className="fas fa-thumbs-down"></i>
              </LikeIcon>
              <LikeNumber>2</LikeNumber>
            </LikeBox>
            <ReplyBox>답글</ReplyBox>
          </IconsWrap>
          {/* 얘는 답글 클릭시 나타날 것 */}
          {/* <VideoCommentsLeaveComment /> */}
        </CommentWrap>
        <MenuBox />
      </VideoCommentsContentBox>
    </VideoCommentsContentWrap>
  );
};

export default VideoCommentsContent;
