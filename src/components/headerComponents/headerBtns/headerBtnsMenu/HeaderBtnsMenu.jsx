import React, { useState } from "react";
import styled from "styled-components";

const StyledIcon = styled.i`
  margin-right: 8px;
  :hover .globalBlackExplanation {
    display: block;
  }
`;

const HeaderBtnsMenu = () => {
  return (
    <StyledIcon className="globalIconBtn">
      <i className="fas fa-th"></i>
      <div className="globalBlackExplanation">GyuTube 앱</div>
    </StyledIcon>
  );
};

export default HeaderBtnsMenu;
