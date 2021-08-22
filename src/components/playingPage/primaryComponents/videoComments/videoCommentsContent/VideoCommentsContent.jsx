import React from "react";
import styled from "styled-components";
import MenuBox from "../../../../contentsComponent/videoBox/videoSummary/videoExplanaion/videoExplanaionDetails/MenuBox";
import UserData from "../../../../../DB/UserData.json";
import UserIcon from "../../../../contentsComponent/videoBox/videoSummary/videoExplanaion/videoExplanaionDetails/UserIcon";
import Pinned from "./pinned/Pinned";
import CommentLikeBtns from "./commentLikeBtns/CommentLikeBtns";
// import VideoCommentsLeaveComment from "../videoCommentsLeaveComment/VideoCommentsLeaveComment";

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

const VideoCommentsContent = ({ commentData = {}, willBeSent = {} }) => {
  console.log("해당 비디오에 작성된 댓글 데이터", commentData);
  console.log("전체 유저 DB", UserData.users);
  const users = commentData.map((comment) => comment.userId);
  console.log("전체 유저 중 댓글 쓴 애들의 ID(PK)", users);

  const commenters = UserData.users.filter((user) =>
    users.includes(user.userId)
  );
  console.log("전체 유저 중 댓글 쓴 애들의 유저 데이터", commenters);

  return (
    <VideoCommentsContentWrap>
      {commenters.map((commenter) => {
        console.log(commenter);
        return (
          <VideoCommentsContentBox>
            <UserIcon willBeSent={willBeSent} commenters={commenter} />
            <CommentWrap>
              <Pinned willBeSent={willBeSent} />
              <NameBox>
                <div>{commenter.userName}</div>
                <DateWrap>
                  <i className="fas fa-check"></i>
                  5일 전
                </DateWrap>
              </NameBox>
              {commentData
                .filter((comment) => comment.userId === commenter.userId)
                .map((comment) => {
                  return (
                    <>
                      <CommentContent>
                        <div>{comment.commentContent}</div>
                      </CommentContent>
                      <CommentLikeBtns
                        commnetThumbUp={comment.commnetThumbUp}
                        commnetThumbDown={comment.commnetThumbDown}
                      />
                    </>
                  );
                })}
            </CommentWrap>
            <MenuBox />
          </VideoCommentsContentBox>
        );
      })}
    </VideoCommentsContentWrap>
  );
};

export default VideoCommentsContent;
