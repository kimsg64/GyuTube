import React, { useState } from "react";
import styled from "styled-components";

const VideoCommentsHeaderWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 24px;
`;

const CommentsNumber = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;
`;

const SortBy = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding-right: 8px;
  border-radius: 2px;
  transition-duration: 0.5s;
  font-size: 14px;
  position: relative;
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: var(--hover-bg-color);
  }
  .fas {
    margin-right: 8px;
  }
  .globalBlackExplanation {
    top: 36px;
  }
`;

const VideoCommentsHeader = ({ commentData = {} }) => {
  const [willBeShown, setWillBeShown] = useState(false);
  const showBlackExplanation = () => {
    setWillBeShown(true);
  };
  const hideBlackExplanation = () => {
    setWillBeShown(false);
  };
  const setCommentLenghtFormat = () => {
    return commentData.length.toLocaleString();
  };
  return (
    <VideoCommentsHeaderWrap>
      <CommentsNumber>댓글 {setCommentLenghtFormat()}개</CommentsNumber>
      <SortBy
        onMouseEnter={showBlackExplanation}
        onMouseLeave={hideBlackExplanation}
      >
        <i className="fas fa-sort-amount-down"></i>
        <div
          className={`globalBlackExplanation ${
            willBeShown ? "display__on" : "display__off"
          }`}
        >
          댓글 정렬
        </div>
        <div>정렬 기준</div>
      </SortBy>
    </VideoCommentsHeaderWrap>
  );
};

export default VideoCommentsHeader;
