import React from "react";
import styled from "styled-components";

const StyledBtnWrap = styled.div`
  width: 72px;
  height: 32px;
  border: none;
  border-left: solid 1px hsl(0, 0%, 80%);
  text-align: center;
  line-height: 32px;
  position: relative;
  :hover {
    cursor: pointer;
    background-color: hsl(0, 0%, 80%);
    border-color: hsl(0, 0%, 80%);
    .fa-search {
      color: black;
    }
  }
  :hover .globalBlackExplanation {
    line-height: normal;
    display: block;
    top: 44px;
    left: 7.87px;
  }
  .fa-search {
    font-size: 16px;
    color: hsl(0, 0%, 38%);
  }
`;

const StyledBtn = styled.button`
  background-color: hsl(0, 0%, 90%);
  border: none;
  width: 100%;
  height: calc(100% + 1px);
  display: block;
  :hover {
    cursor: pointer;
  }
`;

const HeaderSearchBtn = () => {
  return (
    <StyledBtnWrap>
      <StyledBtn type="submit">
        <i className="fas fa-search"></i>
      </StyledBtn>
      <div className="globalBlackExplanation">검색</div>
    </StyledBtnWrap>
  );
};

export default HeaderSearchBtn;
