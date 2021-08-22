import React, { useState } from "react";
import styled from "styled-components";

const VideoUploaderArticleWrap = styled.div`
  padding-bottom: 16px;
  margin-left: 64px;
  margin-bottom: 24px;
  line-height: 1.7;
  .visible {
    display: block;
  }
  .invisible {
    display: none;
  }
  .FullHeight {
    height: auto;
  }
`;

const ArticleBox = styled.div`
  max-height: 88px;
  height: auto;
  width: 80%;
  margin-bottom: 20px;
  overflow: hidden;
  white-space: pre-wrap;
`;

const ShowMoreOrLess = styled.div`
  font-size: 13px;
  color: hsl(0, 0%, 40%);
  :hover {
    cursor: pointer;
  }
`;

const VideoUploaderArticle = ({ post = "" }) => {
  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(true);
  const [isFullHeight, setIsFullHeight] = useState(false);

  const toggleVisiblity = () => {
    setShowMore(!showMore);
    setShowLess(!showLess);
    setIsFullHeight(!isFullHeight);
  };

  console.log(post);
  return (
    <VideoUploaderArticleWrap>
      <ArticleBox className={isFullHeight ? "FullHeight" : null}>
        {post}
      </ArticleBox>
      <ShowMoreOrLess
        onClick={toggleVisiblity}
        className={showLess ? "visible" : "invisible"}
      >
        더보기
      </ShowMoreOrLess>
      <ShowMoreOrLess
        onClick={toggleVisiblity}
        className={showMore ? "visible" : "invisible"}
      >
        간략히
      </ShowMoreOrLess>
    </VideoUploaderArticleWrap>
  );
};

export default VideoUploaderArticle;
