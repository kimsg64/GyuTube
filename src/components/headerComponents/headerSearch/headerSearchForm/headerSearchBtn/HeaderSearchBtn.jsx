import React from "react";
import styled from "styled-components";

const HeaderSearchBtnWrap = styled.div`
  width: 65px;
  height: 30px;
  border: solid 1.5px hsl(0, 0%, 80%);
  border-top: none;
  border-bottom: none;
`;

const StyledBtn = styled.button`
  width: 65px;
  height: 30px;
  border: none;
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
