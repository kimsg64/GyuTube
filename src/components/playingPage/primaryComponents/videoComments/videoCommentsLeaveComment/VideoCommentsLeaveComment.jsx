import React, { useState } from "react";
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
  height: 60px;
  margin-bottom: 3.5px;
  padding-bottom: 4px;
  border: none;
  border-bottom: 1px solid hsl(0, 0%, 56%);
  font-size: 15px;
  background-color: inherit;
  :focus {
    outline: none;
  }
`;

// 이펙트 주고 크기 조절...
const FocusEffect = styled.span`
  width: 100%;
  height: 1px;
  border: 1px solid black;
  position: relative;
  top: -4px;
  transition-duration: 0.3s;
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
  background-color: hsl(0, 0%, 98%);
  color: hsl(0, 0%, 40%);
  :hover {
    cursor: pointer;
  }
`;

const CommentBtn = styled(CancleBtn)`
  background-color: hsl(0, 0%, 80%);
`;

const VideoCommentsLeaveComment = () => {
  const [showEffect, setShowEffect] = useState(false);
  const onFocusEffect = () => {
    setShowEffect(true);
  };
  const onBlurEffect = () => {
    setShowEffect(false);
  };

  return (
    <VideoCommentsLeaveCommentWrap>
      <HeaderUserInfo />
      <InputCommentWrap>
        <InputComment
          type="text"
          placeholder="공개 댓글 추가..."
          onFocus={onFocusEffect}
          onBlur={onBlurEffect}
        />
        {showEffect ? <FocusEffect /> : null}
        <BtnsWrap>
          <CancleBtn>취소</CancleBtn>
          <CommentBtn>댓글</CommentBtn>
        </BtnsWrap>
      </InputCommentWrap>
    </VideoCommentsLeaveCommentWrap>
  );
};

export default VideoCommentsLeaveComment;
