import React from "react";
import styled from "styled-components";
import HeaderUserInfo from "../../../../headerComponents/headerBtns/headerUserInfo/HeaderUserInfo";

const VideoCommentsLeaveCommentWrap = styled.form`
  display: flex;
  width: 100%;
`;

const InputCommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70px;
`;

const InputComment = styled.input`
  border: none;
  margin-bottom: 3.5px;
  border-bottom: 1px solid hsl(0, 0%, 56%);
  font-size: 14px;
  :focus {
    outline: none;
  }
`;

const BtnsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
`;

const CancleBtn = styled.button`
  height: 36px;
  width: 72px;
  padding: 10px 16px;
  margin: 0 4px;
  text-align: center;
  border: none;
  border-radius: 2px;
  background-color: white;
  color: hsl(0, 0%, 40%);
  :hover {
    cursor: pointer;
  }
`;

const CommentBtn = styled(CancleBtn)`
  background-color: hsl(0, 0%, 80%);
`;

const VideoCommentsLeaveComment = () => {
  return (
    <VideoCommentsLeaveCommentWrap>
      <HeaderUserInfo />
      <InputCommentWrap>
        <InputComment
          type="text"
          placeholder="공개 댓글 추가..."
        ></InputComment>
        <BtnsWrap>
          <CancleBtn>취소</CancleBtn>
          <CommentBtn>댓글</CommentBtn>
        </BtnsWrap>
      </InputCommentWrap>
    </VideoCommentsLeaveCommentWrap>
  );
};

export default VideoCommentsLeaveComment;
