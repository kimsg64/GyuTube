import React from "react";
import VideoSummary from "./videoSummary/VideoSummary";
import styled from "styled-components";

const VideoBoxWrap = styled.ul`
  margin-top: 24px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const VideoBox = () => {
  const getName = () => {
    // Name 선택하는 부분은 차후 백엔드 로직을 배워서 입력하고 우선 videos 내의 파일 이름순으로 배치
    // 썸네일 동영상 최대 4개, 최소 1개 반응형으로 배치
    const candidate = [
      "Cat",
      "DancingMan",
      "Firework",
      "GreenBoat",
      "OkinawaSun",
      "Sunset",
      "Train",
      "Lake",
      "KouheiMagic",
      "Funyafunya",
    ];
    return candidate;
  };

  return (
    <VideoBoxWrap>
      {getName().map((movie) => {
        return <VideoSummary key={movie} videoName={movie} />;
      })}
    </VideoBoxWrap>
  );
};

export default VideoBox;
