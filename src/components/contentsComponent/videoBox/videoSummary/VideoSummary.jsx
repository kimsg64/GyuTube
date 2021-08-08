import React, { useState } from "react";
import styled from "styled-components";
import VideoExplanaion from "./videoExplanaion/VideoExplanaion";
import { Link } from "react-router-dom";

const VideoBoxWrap = styled.li`
  list-style: none;
  width: 274px;
  height: 300px;
  margin: 0 8px 40px 8px;
  video {
    /* how to add black bar??? > 세로 영상 대응이 안되는데 iframe? video? */
    max-width: 100%;
  }
  :hover {
    cursor: pointer;
  }
  :hover .fa-ellipsis-v {
    display: flex;
  }
`;

const onMouseEnterVideo = (e) => {
  // console.log(e);
  // console.log(e.target);
  e.target.play();
};

const onMouseOutVideo = (e) => {
  e.target.pause();
  e.target.currentTime = 0;
};

const VideoSummary = ({ videoName }) => {
  const [changePage, setChangePage] = useState(false);

  return (
    <VideoBoxWrap>
      <video
        // src="././././videos/Cat.mp4"
        src={`././././videos/${videoName}.mp4`}
        onMouseEnter={onMouseEnterVideo}
        onMouseOut={onMouseOutVideo}
        muted={true}
      />
      <Link to="/playing" />
      {/* muted: 크롬 정책에 의해 이걸 안 쓰면 자동 재생 안됨!! */}
      <VideoExplanaion />
    </VideoBoxWrap>
  );
};

export default VideoSummary;
