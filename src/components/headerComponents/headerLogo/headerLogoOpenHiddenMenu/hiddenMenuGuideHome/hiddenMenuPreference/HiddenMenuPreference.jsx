import React from "react";
import styled from "styled-components";

const HiddenMenuPreferenceWrap = styled.div`
  height: 223px;
  border-bottom: solid 1px hsl(0, 0%, 80%);
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ItemBar = styled.div`
  height: 40px;
  padding: 0 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .text {
    display: none;
  }
  :hover {
    cursor: pointer;
    background-color: hsl(0, 0%, 90%);
  }
  :active {
    background-color: hsl(0, 0%, 70%);
  }
`;

const TextBar = styled.div`
  width: 144px;
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
`;

const IconWrap = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 18px;
`;

const HiddenMenuPreference = () => {
  return (
    <HiddenMenuPreferenceWrap>
      <ItemBar>
        <IconWrap className="globalIconBtnRect">
          <i className="fas fa-clone"></i>
        </IconWrap>
        <TextBar>보관함</TextBar>
      </ItemBar>
      <ItemBar>
        <IconWrap className="globalIconBtnRect">
          <i className="fas fa-history"></i>
        </IconWrap>
        <TextBar>시청 기록</TextBar>
      </ItemBar>
      <ItemBar>
        <IconWrap className="globalIconBtnRect">
          <i className="far fa-play-circle"></i>
        </IconWrap>
        <TextBar>내 동영상</TextBar>
      </ItemBar>
      <ItemBar>
        <IconWrap className="globalIconBtnRect">
          <i className="fas fa-clock"></i>
        </IconWrap>
        <TextBar>나중에 볼 동영상</TextBar>
      </ItemBar>
      <ItemBar>
        <IconWrap className="globalIconBtnRect">
          <i className="fas fa-thumbs-up"></i>
        </IconWrap>
        <TextBar>좋아요 표시한 동영상</TextBar>
      </ItemBar>
    </HiddenMenuPreferenceWrap>
  );
};

export default HiddenMenuPreference;
