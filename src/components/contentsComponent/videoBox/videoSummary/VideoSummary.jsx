import React from "react";
import styled from "styled-components";
import VideoExplanaion from "./videoExplanaion/VideoExplanaion";
import { Link } from "react-router-dom";

const VideoList = styled.li`
  max-width: 340px;
  max-height: 287px;
  min-height: 140px;
  margin: 0 8px 40px 8px;
  :hover {
    cursor: pointer;
  }
  :hover .fa-ellipsis-v {
    display: flex;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    max-width: none;
    max-height: none;
  }
`;

const VideoWrap = styled.div`
  width: 99%;
  height: 66%;
  background-color: black;
  @media ${(props) => props.theme.mobile} {
    /* max-height: 79%; */
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;
    width: auto;
    height: auto;
  }
  video {
    width: 100%;
    height: 100%;

    @media ${(props) => props.theme.mobile} {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      max-width: 100%;
      height: auto;
    }
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
