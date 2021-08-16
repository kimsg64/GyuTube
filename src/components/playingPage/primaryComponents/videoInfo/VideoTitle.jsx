import React from "react";
import styled from "styled-components";

const HashTagStyle = styled.a`
  font-size: 12px;
  color: hsl(215, 95%, 44%);
  :hover {
    cursor: pointer;
  }
`;

const VideoTitle = () => {
  return (
    <>
      <HashTagStyle> #커피와어울리는고양이</HashTagStyle>
      <HashTagStyle> #유럽에서보는고양이</HashTagStyle>
      <HashTagStyle> #보기좋은고양이</HashTagStyle>

      <div>커여운 유럽산 고양이! 고양이 모음</div>
    </>
  );
};

export default VideoTitle;
