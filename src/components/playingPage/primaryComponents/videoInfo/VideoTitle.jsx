import React from "react";
import styled from "styled-components";

const HashTagStyle = styled.a`
  font-size: 12px;
  color: hsl(215, 95%, 44%);
  :hover {
    cursor: pointer;
  }
`;

const VideoTitle = ({ mainTitle = "", hashtags = "" }) => {
  // console.log("메인 타이틀 받는 곳!", mainTitle, "해시태그", hashtags);
  return (
    <>
      {hashtags.map((tag) => (
        <HashTagStyle> {tag}</HashTagStyle>
      ))}
      <div>{mainTitle}</div>
    </>
  );
};

export default VideoTitle;
