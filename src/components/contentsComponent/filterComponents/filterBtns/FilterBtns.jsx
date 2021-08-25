import React, { useState } from "react";
import styled from "styled-components";

const BtnsWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StyledBtn = styled.button`
  margin: 12px;
  padding: 0 12px;
  height: 32px;
  border: solid 1px hsl(0, 0%, 80%);
  border-radius: 16px;
  min-width: 52.67px;
  flex-shrink: 0;
  :hover {
    cursor: pointer;
    background-color: var(--default-bg-color);
  }
  :active {
    transition-duration: 0.2s;
    background-color: black;
    color: white;
  }
`;

const FilterBtns = () => {
  const [isSelected, setIsSelected] = useState(false);
  const onClickBtn = () => {
    setIsSelected(true);
  };
  return (
    <BtnsWrap>
      <StyledBtn className="first selected_filter">전체</StyledBtn>
      <StyledBtn>농구</StyledBtn>
      <StyledBtn>요리 프로그램</StyledBtn>
      <StyledBtn>음악</StyledBtn>
      <StyledBtn>믹스</StyledBtn>
      <StyledBtn>피트니스</StyledBtn>
      <StyledBtn>실시간</StyledBtn>
      <StyledBtn>스포츠 비디오 게임</StyledBtn>
      <StyledBtn>배구</StyledBtn>
      <StyledBtn>침착맨</StyledBtn>
      <StyledBtn>케인인</StyledBtn>
      <StyledBtn>반려동물</StyledBtn>
      <StyledBtn>최근에 업로드된 동영상</StyledBtn>
      <StyledBtn>감상한 동영상</StyledBtn>
    </BtnsWrap>
  );
};

export default FilterBtns;
