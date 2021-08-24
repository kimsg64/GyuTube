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
  // console.log("해당 비디오에 작성된 댓글 데이터", commentData);
  // console.log("전체 유저 DB", UserData.users);
  const users = commentData.map((comment) => comment.userId);
  // console.log("전체 유저 중 댓글 쓴 애들의 ID(PK)", users);

  const commenters = UserData.users.filter((user) =>
    users.includes(user.userId)
  );
  // console.log("전체 유저 중 댓글 쓴 애들의 유저 데이터", commenters);

  const setYears = (timeData) => {
    // 현재 날짜
    const now = new Date();
    const thisYear = now.getFullYear();
    const thisMonth = now.getMonth() + 1;
    const today = now.getDate();

    // 업로드 날짜
    const commentYear = parseInt(timeData.split(".")[0]);
    const commentMonth = parseInt(timeData.split(".")[1]);
    const commentDate = parseInt(timeData.split(".")[2]);

    const yearGap = thisYear - commentYear;
    const monthGap = thisMonth - commentMonth;
    const dateGap = today - commentDate;

    return yearGap >= 1
      ? `${yearGap}년 `
      : monthGap >= 1
      ? `${monthGap}개월 `
      : `${dateGap}일 `;
  };

  return (
    <VideoCommentsContentWrap>
      {commenters.map((commenter) => {
        // console.log(commenter);
        return (
          <VideoCommentsContentBox>
            {commentData
              .filter((comment) => comment.userId === commenter.userId)
              .map((comment) => {
                return (
                  <>
                    <UserIcon willBeSent={willBeSent} commenters={commenter} />
                    <CommentWrap>
                      {comment.commentPinned ? (
                        <Pinned willBeSent={willBeSent} />
                      ) : null}
                      <NameBox>
                        <div>{commenter.userName}</div>
                        <DateWrap>
                          <i className="fas fa-check"></i>
                          {setYears(comment.commentDate)} 전
                        </DateWrap>
                      </NameBox>
                      <CommentContent>
                        <div>{comment.commentContent}</div>
                      </CommentContent>
                      <CommentLikeBtns
                        commentThumbUp={comment.commentThumbUp}
                        commentThumbDown={comment.commentThumbDown}
                      />
                    </CommentWrap>
                    <MenuBox />
                  </>
                );
              })}
          </VideoCommentsContentBox>
        );
      })}
    </VideoCommentsContentWrap>
  );
};

export default VideoCommentsContent;
