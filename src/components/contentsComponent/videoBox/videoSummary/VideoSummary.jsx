import React from "react";
import styled from "styled-components";
import VideoExplanaion from "./videoExplanaion/VideoExplanaion";
import { Link } from "react-router-dom";

const VideoBox = styled.li`
  list-style: none;
  max-width: 359px;
  max-height: 298px;
  min-width: 250px;
  min-height: 140px;
  width: 25%;
  height: auto;
  margin: 0 8px 40px 8px;
  video {
    /* how to add black bar??? > 세로 영상 대응이 안된다... iframe? video? */
    /* video background를 black...? */
    width: 100%;
    height: 60%;
    background-color: black;
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
  const playPromise = e.target.play();
  if (playPromise !== undefined) {
    playPromise
      .then(console.log("여기에 뭘 해야될게 있나?"))
      .catch(console.log("아마 없을 듯"));
  }
};

const onMouseOutVideo = (e) => {
  e.target.pause();
  e.target.currentTime = 0;
};

const VideoSummary = ({ video = {} }) => {
  console.log("비디오 서머리", video);

  return (
    // video태그와 explanation 태그를 묶어서 저장할 것이므로... 이걸로 글자에 마우스 올려도 비디오 자동재생하기
    <VideoBox onMouseEnter={(e) => console.log(e.target)}>
      <Link to={`/playing/${video.videoNo}/${video.videoTitle}`}>
        <video
          src={`/videos/${video.videoTitle}.mp4`}
          onMouseEnter={onMouseEnterVideo}
          onMouseOut={onMouseOutVideo}
          muted={true}
        />
      </Link>
      <VideoExplanaion key={video.videoNo} videoData={video} />
    </VideoBox>
  );
};

export default VideoSummary;
