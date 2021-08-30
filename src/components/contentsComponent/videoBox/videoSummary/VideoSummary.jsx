import React from "react";
import styled from "styled-components";
import VideoExplanaion from "./videoExplanaion/VideoExplanaion";
import { Link } from "react-router-dom";

const VideoList = styled.li`
  /* 
  화면 크기에 따른 반응형 max-width
  화면크기 ?px => 비디오 5개 * ?px
  화면크기 ?px => 비디오 4개 * ?px
  화면크기 1143px 이하 => 비디오 3개 * 319px
  화면크기 887px 이하 => 비디오 2개 * 319px
  화면크기 551px 이하 => 비디오1개 * 336px
  */
  max-width: 359px;
  max-height: 298px;
  /* min-width: 250px; */
  min-height: 140px;
  width: calc((100%) / 4);
  /* height: auto; */
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
  // if (playPromise !== undefined) {
  //   playPromise
  //     .then(console.log("여기에 뭘 해야될게 있나?"))
  //     .catch(console.log("아마 없을 듯"));
  // }
};

const onMouseOutVideo = (e) => {
  e.target.pause();
  e.target.currentTime = 0;
};

const VideoSummary = ({ video = {} }) => {
  // console.log("비디오 서머리", video);

  return (
    // video태그와 explanation 태그를 묶어서 저장할 것이므로... 이걸로 글자에 마우스 올려도 비디오 자동재생하기
    <VideoList>
      <Link to={`/playing/${video.videoNo}/${video.videoTitle}`}>
        <video
          src={`/videos/${video.videoTitle}.mp4`}
          onMouseEnter={onMouseEnterVideo}
          onMouseOut={onMouseOutVideo}
          muted={true}
        />
      </Link>
      <VideoExplanaion key={video.videoNo} videoData={video} />
    </VideoList>
  );
};

export default VideoSummary;
