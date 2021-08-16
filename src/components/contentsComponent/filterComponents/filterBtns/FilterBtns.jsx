import React from "react";
import styled from "styled-components";

const BtnsWrap = styled.button`
  margin: 12px;
  padding: 0 12px;
  height: 32px;
  border: solid 1px hsl(0, 0%, 80%);
  border-radius: 16px;
  min-width: 52.67px;
  flex-shrink: 0;
  /* width > 반응형, 글자 수를 받아와서 그만큼 넓히기 ? n rem(글자수) + 24px(패딩) */
`;

const ArrowWrap = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .fas {
    font-size: 10px;
  }
  :active {
    background-color: hsl(0, 0%, 80%);
  }
`;

const FilterBtns = () => {
  return (
    <>
      <ArrowWrap>
        <i class="fas fa-chevron-left"></i>
      </ArrowWrap>
      <BtnsWrap className="first">전체</BtnsWrap>
      <BtnsWrap>농구</BtnsWrap>
      <BtnsWrap>요리 프로그램</BtnsWrap>
      <BtnsWrap>음악</BtnsWrap>
      <BtnsWrap>믹스</BtnsWrap>
      <BtnsWrap>피트니스</BtnsWrap>
      <BtnsWrap>스포츠 비디오 게임</BtnsWrap>
      <BtnsWrap>배구</BtnsWrap>
      <BtnsWrap>침착맨</BtnsWrap>
      <BtnsWrap>케인인</BtnsWrap>
      <BtnsWrap>반려동물</BtnsWrap>
      <BtnsWrap>최근에 업로드된 동영상</BtnsWrap>
      <BtnsWrap>감상한 동영상</BtnsWrap>
      <ArrowWrap>
        <i class="fas fa-chevron-right"></i>
      </ArrowWrap>
    </>
  );
};

export default FilterBtns;
