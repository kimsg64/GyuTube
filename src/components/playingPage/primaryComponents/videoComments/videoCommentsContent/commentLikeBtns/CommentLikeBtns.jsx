import React from "react";
import styled from "styled-components";

const IconsWrap = styled.div`
  height: 36px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  color: hsl(0, 0%, 56%);
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
  box-sizing: border-box;
  position: relative;
  .globalBlackExplanation {
    white-space: nowrap;
  }
  :hover .globalBlackExplanation {
    display: block;
  }
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

const CommentLikeBtns = ({ commentThumbUp = "", commentThumbDown = "" }) => {
  return (
    <IconsWrap>
      <LikeBox>
        <LikeIcon className="globalIconBtn">
          <i className="fas fa-thumbs-up"></i>
          <div className="globalBlackExplanation">좋아요</div>
        </LikeIcon>
        <LikeNumber>{parseInt(commentThumbUp).toLocaleString()}</LikeNumber>
      </LikeBox>
      <LikeBox>
        <LikeIcon className="globalIconBtn">
          <i className="fas fa-thumbs-down"></i>
          <div className="globalBlackExplanation">싫어요</div>
        </LikeIcon>
        <LikeNumber>
          {commentThumbDown && parseInt(commentThumbDown).toLocaleString()}
        </LikeNumber>
      </LikeBox>
      <ReplyBox>답글</ReplyBox>
    </IconsWrap>
  );
};

export default CommentLikeBtns;
