import React from "react";
import VideoCommentsContent from "./videoCommentsContent/VideoCommentsContent";
import VideoCommentsHeader from "./videoCommentsHeader/VideoCommentsHeader";
import VideoCommentsLeaveComment from "./videoCommentsLeaveComment/VideoCommentsLeaveComment";
import styled from "styled-components";
import CommentData from "../../../../DB/CommentData.json";

const VideoCommentsWrap = styled.div`
  margin: 24px 0 32px 0;
`;

const VideoComments = ({ willBeSent = {} }) => {
  console.log(willBeSent.videoNo);
  const comments = CommentData.comments.filter(
    (comment) => comment.videoNo === willBeSent.videoNo
  );
  console.log(comments);
  return (
    <VideoCommentsWrap>
      <VideoCommentsHeader commentData={comments} />
      <VideoCommentsLeaveComment />
      <VideoCommentsContent commentData={comments} willBeSent={willBeSent} />
    </VideoCommentsWrap>
  );
};

export default VideoComments;
