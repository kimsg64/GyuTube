import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  width: 72px;
  height: 30px;
  border: none;
  border-left: solid 1.5px hsl(0, 0%, 80%);
  :hover {
    cursor: pointer;
    background-color: hsl(0, 0%, 80%);
    border-color: hsl(0, 0%, 80%);
    .fa-search {
      color: black;
    }
  }
  :hover .globalBlackExplanation {
    display: block;
  }
  .fa-search {
    font-size: 16px;
    color: hsl(0, 0%, 38%);
  }
`;

const HeaderSearchBtn = () => {
  return (
    <StyledBtn>
      <i className="fas fa-search"></i>
      <div className="globalBlackExplanation">검색</div>
    </StyledBtn>
  );
};

export default HeaderSearchBtn;
