import React, { useRef, forwardRef } from "react";
import styled from "styled-components";
import UserData from "../../../../DB/UserData.json";

const ShowCase = styled.div`
  width: calc(100% -100px);
  overflow-x: hidden;
  z-index: -1;
  mask: linear-gradient(to right, black 95%, transparent);
`;

const BtnsWrap = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  position: relative;
  left: 0;
  transition-duration: 0.2s;
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

const FilterBtns = forwardRef((props, ref) => {
  // console.log(UserData.users[0].preferredTheme);
  const preferredThemes = [...UserData.users[0].preferredTheme];
  // console.log(preferredThemes);
  return (
    <ShowCase>
      <BtnsWrap ref={ref}>
        <StyledBtn className="first selected_filter">전체</StyledBtn>
        {preferredThemes.map((preferredTheme) => {
          return <StyledBtn>{preferredTheme}</StyledBtn>;
        })}
        <StyledBtn>최근에 업로드된 동영상</StyledBtn>
        <StyledBtn>감상한 동영상</StyledBtn>
      </BtnsWrap>
    </ShowCase>
  );
});

export default FilterBtns;
