import React from "react";
import styled from "styled-components";

// 없어도 될것같은데?
const HeaderSearchBtnWrap = styled.div`
  /* width: 65px; */
  /* height: 30px; */
  /* border: solid 1px hsl(0, 0%, 90%); */
`;

const StyledBtn = styled.button`
  width: 65px;
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
  .fa-search {
    font-size: 16px;
    color: hsl(0, 0%, 38%);
  }
`;

const HeaderSearchBtn = () => {
  return (
    <HeaderSearchBtnWrap>
      <StyledBtn>
        <i className="fas fa-search"></i>
      </StyledBtn>
    </HeaderSearchBtnWrap>
  );
};

export default HeaderSearchBtn;
