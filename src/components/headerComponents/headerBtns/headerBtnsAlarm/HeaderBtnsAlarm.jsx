import React from "react";
import styled from "styled-components";

const StyledIcon = styled.i`
  margin-right: 8px;
  :hover .globalBlackExplanation {
    display: block;
  }
`;

const HeaderBtnsAlarm = () => {
  return (
    <StyledIcon className="globalIconBtn">
      <i className="fas fa-bell"></i>
      <div className="globalBlackExplanation">알림</div>
    </StyledIcon>
  );
};

export default HeaderBtnsAlarm;
