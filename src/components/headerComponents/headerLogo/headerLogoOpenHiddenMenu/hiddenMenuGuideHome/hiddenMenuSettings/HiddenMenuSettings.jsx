import React from "react";
import styled from "styled-components";

const HiddenMenuSettingsWrap = styled.div`
  height: 176px;
  border-bottom: solid 1px hsl(0, 0%, 80%);
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .fab {
    font-size: 18px;
    color: hsl(0, 0%, 38%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .fab:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const TitleWrap = styled.div`
  height: 40px;
  padding: 0px 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  color: hsl(0, 0%, 40%);
`;

const ItemsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemBar = styled.div`
  height: 40px;
  padding: 0 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    height: 40px;
    margin-right: 24px;
  }
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
  font-size: 12px;
  font-weight: 400;
`;

const IconWrap = styled.div`
  width: 30px;
  height: 74px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    margin-top: 6px;
    font-size: 10px;
  }
`;

const HiddenMenuSettings = () => {
  return (
    <HiddenMenuSettingsWrap>
      <ItemsWrap>
        <ItemBar>
          <IconWrap>
            <i class="fas fa-cog"></i>
          </IconWrap>
          <TextBar>설정</TextBar>
        </ItemBar>
        <ItemBar>
          <IconWrap>
            <i class="fas fa-flag"></i>
          </IconWrap>
          <TextBar>신고 기록</TextBar>
        </ItemBar>
        <ItemBar>
          <IconWrap>
            <i class="fas fa-question-circle"></i>
          </IconWrap>
          <TextBar>고객센터</TextBar>
        </ItemBar>
        <ItemBar>
          <IconWrap>
            <i class="fas fa-comment-alt"></i>
          </IconWrap>
          <TextBar>의견 보내기</TextBar>
        </ItemBar>
      </ItemsWrap>
    </HiddenMenuSettingsWrap>
  );
};

export default HiddenMenuSettings;