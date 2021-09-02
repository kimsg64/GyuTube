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
  /* 화면 크기에 따라 max-width, max-height 조절해서 블랙 바 없애기 */
  max-width: 340px;
  max-height: 287px;
  /* min-width: 250px; */
  min-height: 140px;
  margin: 0 8px 40px 8px;
  :hover {
    cursor: pointer;
  }
  :hover .fa-ellipsis-v {
    display: flex;
  }
`;

const VideoWrap = styled.div`
  width: 99%;
  height: 66%;
  background-color: black;
  video {
    /* how to add black bar??? > 세로 영상 대응이 안된다... iframe? video? > 응 됨;*/
    width: 100%;
    height: 100%;
  }
`;

const onMouseEnterVideo = (e) => {
  // console.log(e);
  // console.log(e.target);
  // const playPromise = e.target.play();
  e.target.play();
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
        {/* video box를 하나 만들어서 video는 100% 100%로 */}
        <VideoWrap>
          <video
            src={`/videos/${video.videoTitle}.mp4`}
            onMouseEnter={onMouseEnterVideo}
            onMouseOut={onMouseOutVideo}
            muted={true}
          />
        </VideoWrap>
      </Link>
      <VideoExplanaion key={video.videoNo} videoData={video} />
    </VideoList>
  );
};

export default VideoSummary;
