import React from "react";
import VideoSummary from "./videoSummary/VideoSummary";
import styled from "styled-components";

const VideoBoxWrap = styled.ul`
  margin-top: 24px;
  width: 100%;
  /* 너비를 변수화해서 계산해야 반응형으로 설정할 수 있나??? */
  /* width: calc(100%-32px); */
  /* max-width: calc(5 * 360 + 16) px; */
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 25%;
`;

const VideoBox = ({ videoData = {} }) => {
  // console.log("비디오박스", videoData);
  // Name 선택하는 부분은 차후 백엔드 로직을 배워서 입력하고 우선 videos 내의 파일 이름순으로 배치
  // 썸네일 동영상 최대 4개, 최소 1개 반응형으로 배치
  return (
    <VideoBoxWrap>
      {videoData.map((video) => {
        return <VideoSummary key={video.videoNo} video={video} />;
      })}
    </VideoBoxWrap>
  );
};

export default VideoBox;
