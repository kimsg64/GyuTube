import React from "react";
import VideoComments from "../videoComments/VideoComments";
import VideoUploader from "./videoMetaDetails/VideoUploader";
import VideoUploaderArticle from "./videoMetaDetails/VideoUploaderArticle";

const VideoMeta = () => {
  return (
    <div>
      <VideoUploader></VideoUploader>
      <VideoUploaderArticle></VideoUploaderArticle>
      <VideoComments></VideoComments>
    </div>
  );
};

export default VideoMeta;
