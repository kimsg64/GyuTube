import React from "react";
import styled from "styled-components";

const HiddenMenuAboutGyutubeWrap = styled.div`
  height: 291px;
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

const HiddenMenuAboutGyutube = () => {
  return (
    <HiddenMenuAboutGyutubeWrap>
      <TitleWrap>GyuTube 더보기</TitleWrap>
      <ItemsWrap>
        <ItemBar>
          <IconWrap className="globalIconBtnRect">
            <i class="fab fa-youtube"></i>
          </IconWrap>
          <TextBar>GyuTube Premium</TextBar>
        </ItemBar>
        <ItemBar>
          <IconWrap className="globalIconBtnRect">
            <i class="fas fa-film"></i>
          </IconWrap>
          <TextBar>영화</TextBar>
        </ItemBar>
        <ItemBar>
          <IconWrap className="globalIconBtnRect">
            <i class="fas fa-gamepad"></i>
          </IconWrap>
          <TextBar>게임</TextBar>
        </ItemBar>
        <ItemBar>
          <IconWrap className="globalIconBtnRect">
            <i class="fas fa-podcast"></i>
          </IconWrap>
          <TextBar>실시간</TextBar>
        </ItemBar>
        <ItemBar>
          <IconWrap className="globalIconBtnRect">
            <i class="fas fa-lightbulb"></i>
          </IconWrap>
          <TextBar>학습</TextBar>
        </ItemBar>
        <ItemBar>
          <IconWrap className="globalIconBtnRect">
            <i class="fas fa-trophy"></i>
          </IconWrap>
          <TextBar>스포츠</TextBar>
        </ItemBar>
      </ItemsWrap>
    </HiddenMenuAboutGyutubeWrap>
  );
};

export default HiddenMenuAboutGyutube;
