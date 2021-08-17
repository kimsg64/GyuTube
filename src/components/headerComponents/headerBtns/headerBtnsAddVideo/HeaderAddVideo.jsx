import React from "react";
import styled from "styled-components";

// 글로벌 스타일 적용으로 삭제 가능
const StyledIcon = styled.i`
  /* width: 40px;
  height: 40px; */
  margin-right: 8px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const HeaderAddVideo = () => {
  return (
    <StyledIcon className="globalIconBtn">
      <i className="fas fa-video"></i>
    </StyledIcon>
  );
};

export default HeaderAddVideo;
