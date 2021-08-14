import React from "react";
import styled from "styled-components";

const StyledIcon = styled.i`
  width: 40px;
  height: 40px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderAddVideo = () => {
  return (
    <StyledIcon>
      <i className="fas fa-video"></i>
    </StyledIcon>
  );
};

export default HeaderAddVideo;
