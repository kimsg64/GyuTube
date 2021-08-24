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
  :hover {
    cursor: pointer;
    background-color: var(--hover-bg-color);
  }
  :active {
    background-color: var(--active-bg-color);
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
  margin-right: 18px;
`;

const HiddenMenuSettings = () => {
  return (
    <HiddenMenuSettingsWrap>
      <ItemsWrap>
        <ItemBar>
          <IconWrap className="globalIconBtnRect">
            <i className="fas fa-cog"></i>
          </IconWrap>
          <TextBar>설정</TextBar>
        </ItemBar>
        <ItemBar>
          <IconWrap className="globalIconBtnRect">
            <i className="fas fa-flag"></i>
          </IconWrap>
          <TextBar>신고 기록</TextBar>
        </ItemBar>
        <ItemBar>
          <IconWrap className="globalIconBtnRect">
            <i className="fas fa-question-circle"></i>
          </IconWrap>
          <TextBar>고객센터</TextBar>
        </ItemBar>
        <ItemBar>
          <IconWrap className="globalIconBtnRect">
            <i className="fas fa-comment-alt"></i>
          </IconWrap>
          <TextBar>의견 보내기</TextBar>
        </ItemBar>
      </ItemsWrap>
    </HiddenMenuSettingsWrap>
  );
};

export default HiddenMenuSettings;
