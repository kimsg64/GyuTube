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
  justify-content: center;
  flex-wrap: wrap;
  flex: 1 1 25%;
`;

const EmptyVideoList = styled.li`
  width: 340px;
  height: 287px;
  margin: 0 8px 40px 8px;
`;

const EmptyVideoBox = styled.div`
  width: 100%;
  height: 60%;
  background-color: inherit;
`;

const VideoBox = ({ videoData = {}, checkTheme = "전체" }) => {
  // console.log("비디오박스", videoData);
  // Name 선택하는 부분은 차후 백엔드 로직을 배워서 입력하고 우선 videos 내의 파일 이름순으로 배치
  // 썸네일 동영상 최대 5개, 최소 1개 반응형으로 배치 > 20개까지는 넣고... 3개일 때부터 빈 칸 추가하기(3으로 나눈 나머지)
  // console.log(videoData.length % 4);
  // console.log(checkTheme);

  return (
    <VideoBoxWrap>
      {checkTheme === "전체"
        ? videoData.map((video) => {
            return <VideoSummary key={video.videoNo} video={video} />;
          })
        : videoData
            .filter((video) => video.theme.includes(checkTheme))
            .map((video) => {
              return <VideoSummary key={video.videoNo} video={video} />;
            })}
      <EmptyVideoList>
        <EmptyVideoBox />
      </EmptyVideoList>
      <EmptyVideoList>
        <EmptyVideoBox />
      </EmptyVideoList>
      <EmptyVideoList>
        <EmptyVideoBox />
      </EmptyVideoList>
      <EmptyVideoList>
        <EmptyVideoBox />
      </EmptyVideoList>
    </VideoBoxWrap>
  );
};

export default VideoBox;
