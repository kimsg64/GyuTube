import React from "react";
import VideoComments from "../videoComments/VideoComments";
import VideoUploader from "./videoMetaDetails/VideoUploader";
import VideoUploaderArticle from "./videoMetaDetails/VideoUploaderArticle";
import styled from "styled-components";

const MetaWrap = styled.div`
  border-top: solid 1px hsl(0, 0%, 80%);
  border-bottom: solid 1px hsl(0, 0%, 80%);
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  font-size: 14px;
`;

const VideoMeta = () => {
  return (
    <MetaWrap>
      <VideoUploader></VideoUploader>
      <VideoUploaderArticle></VideoUploaderArticle>
    </MetaWrap>
  );
};

export default VideoMeta;
