import React from "react";
import styled from "styled-components";

const HiddenMenuAboutGyutubeWrap = styled.div`
  height: 291px;
  border-bottom: solid 1px hsl(0, 0%, 80%);
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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

// 글로벌 스타일 적용! 필요없다
// const ItemsWrap = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const ItemBar = styled.div`
//   height: 40px;
//   padding: 0 20px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   :hover {
//     cursor: pointer;
//     background-color: var(--hover-bg-color);
//   }
//   :active {
//     background-color: var(--active-bg-color);
//   }
// `;

// const TextBar = styled.div`
//   width: 144px;
//   height: 20px;
//   display: flex;
//   align-items: center;
//   font-size: 14px;
//   font-weight: 400;
// `;

// const div = styled.div`
//   width: 30px;
//   height: 30px;
//   margin-right: 18px;
// `;

const HiddenMenuAboutGyutube = () => {
  return (
    <HiddenMenuAboutGyutubeWrap>
      <TitleWrap>GyuTube 더보기</TitleWrap>
      <div className="globalItemsWrap">
        <div className="globalItemBar">
          <div className="globalIconBtnRect globalIconWrap">
            <i className="fab fa-youtube"></i>
          </div>
          <div className="globalTextBar">GyuTube Premium</div>
        </div>
        <div className="globalItemBar">
          <div className="globalIconBtnRect globalIconWrap">
            <i className="fas fa-film"></i>
          </div>
          <div className="globalTextBar">영화</div>
        </div>
        <div className="globalItemBar">
          <div className="globalIconBtnRect globalIconWrap">
            <i className="fas fa-gamepad"></i>
          </div>
          <div className="globalTextBar">게임</div>
        </div>
        <div className="globalItemBar">
          <div className="globalIconBtnRect globalIconWrap">
            <i className="fas fa-podcast"></i>
          </div>
          <div className="globalTextBar">실시간</div>
        </div>
        <div className="globalItemBar">
          <div className="globalIconBtnRect globalIconWrap">
            <i className="fas fa-lightbulb"></i>
          </div>
          <div className="globalTextBar">학습</div>
        </div>
        <div className="globalItemBar">
          <div className="globalIconBtnRect globalIconWrap">
            <i className="fas fa-trophy"></i>
          </div>
          <div className="globalTextBar">스포츠</div>
        </div>
      </div>
    </HiddenMenuAboutGyutubeWrap>
  );
};

export default HiddenMenuAboutGyutube;
