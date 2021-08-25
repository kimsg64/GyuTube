import React from "react";
import styled from "styled-components";

const StyledIcon = styled.i`
  margin-right: 8px;
  :hover .globalBlackExplanation {
    display: block;
  }
`;

const HeaderAddVideo = () => {
  return (
    <StyledIcon className="globalIconBtn">
      <i className="fas fa-video"></i>
      <div className="globalBlackExplanation">만들기</div>
    </StyledIcon>
  );
};

export default HeaderAddVideo;
