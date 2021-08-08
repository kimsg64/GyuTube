import React from "react";
import styled from "styled-components";

const StyledBtns = styled.button`
  margin: 12px;
  padding: 0 12px;
  height: 32px;
  border: solid 1px hsl(0, 0%, 80%);
  border-radius: 16px;
`;

const FilterBtns = () => {
  return (
    <>
      {/* first만 left margin 24px */}
      <StyledBtns id="first">전체</StyledBtns>
      <StyledBtns>농구</StyledBtns>
      <StyledBtns>요리 프로그램</StyledBtns>
      <StyledBtns>음악</StyledBtns>
      <StyledBtns>믹스</StyledBtns>
      <StyledBtns>피트니스</StyledBtns>
      <StyledBtns>스포츠 비디오 게임</StyledBtns>
      {/* <StyledBtns>배구</StyledBtns> */}
      <StyledBtns>반려동물</StyledBtns>
      <StyledBtns>최근에 업로드된 동영상</StyledBtns>
      <StyledBtns>감상한 동영상</StyledBtns>
    </>
  );
};

export default FilterBtns;
