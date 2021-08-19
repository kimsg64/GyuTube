import React from "react";
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
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: hsl(0, 0%, 80%);
  }
  .fas {
    margin-right: 8px;
  }
`;

const VideoCommentsHeader = () => {
  return (
    <VideoCommentsHeaderWrap>
      <CommentsNumber>댓글 50,219개</CommentsNumber>
      <SortBy>
        <i class="fas fa-sort-amount-down"></i>
        <div>정렬 기준</div>
      </SortBy>
    </VideoCommentsHeaderWrap>
  );
};

export default VideoCommentsHeader;
