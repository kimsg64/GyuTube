import React from "react";
import styled from "styled-components";
import VideoExplanaion from "./videoExplanaion/VideoExplanaion";
import { Link } from "react-router-dom";

const VideoBoxWrap = styled.li`
  list-style: none;
  max-width: 359px;
  max-height: 298px;
  min-width: 250px;
  min-height: 140px;
  width: 23%;
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

const VideoSummary = ({ videoName }) => {
  // const [changePage, setChangePage] = useState(false);
  return (
    <VideoBoxWrap>
      <Link to={`/playing/${videoName}`}>
        <video
          src={`/videos/${videoName}.mp4`}
          onMouseEnter={onMouseEnterVideo}
          onMouseOut={onMouseOutVideo}
          muted={true}
        />
      </Link>
      <VideoExplanaion />
      {/* muted: 크롬 정책에 의해 이걸 안 쓰면 자동 재생 안됨!! */}
    </VideoBoxWrap>
  );
};

export default VideoSummary;
