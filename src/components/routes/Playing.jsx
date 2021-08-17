import React from "react";
import Header from "../headerComponents/Header";
import styled from "styled-components";
import VideoTitle from "../playingPage/primaryComponents/videoInfo/VideoTitle";
import VideoInfo from "../playingPage/primaryComponents/videoInfo/VideoInfo";
import VideoMeta from "../playingPage/primaryComponents/videoMeta/VideoMeta";
import VideoComments from "../playingPage/primaryComponents/videoComments/VideoComments";
import NextVideoList from "../playingPage/asideComponents/NextVideoList";

const StyledColumnsWrap = styled.div`
  top: 56px;
  width: calc(100vw - 56px - 60px);
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;

  /* aside */
  aside {
    flex: 3;
    padding: 24px 24px 0 0;
    background-color: powderblue;
  }
`;

const PrimaryWrap = styled.div`
  flex: 7;
  padding: 24px 24px 0 0;
  margin-left: 24px;
  video {
    width: 100%;
  }
`;

const PlayerWrap = styled.div`
  max-width: 1280px;
  max-height: 720px;
`;

//
const InfoWrap = styled.div`
  padding: 20px 0 8px 0;
`;

// 작성자 코멘트
const MetaWrap = styled.div``;

// 댓글
const CommentsWrap = styled.div``;

const Playing = ({ match }) => {
  console.log(match);
  const { params } = match;
  return (
    <>
      <Header />
      <StyledColumnsWrap>
        <PrimaryWrap>
          <PlayerWrap>
            {/* 경로를 ./으로 하면 안되고 다 지우거나 ../로 하니까 된다. */}
            {/* 리액트 라우터가 마치 url을 이동하고 있는 것 같이 생겼지만 사실은 그냥 컴포넌트 갈아끼워서 페이지 이동한 것 처럼 보이게하는 눈속임 마술을 부리는 새끼라서  */}
            <video src={`/videos/${params.videoName}.mp4`} controls />
          </PlayerWrap>

          <InfoWrap>
            <VideoTitle></VideoTitle>
            <VideoInfo></VideoInfo>
          </InfoWrap>

          <MetaWrap>
            <VideoMeta></VideoMeta>
          </MetaWrap>

          <CommentsWrap>
            <VideoComments></VideoComments>
          </CommentsWrap>
        </PrimaryWrap>
        {/* aside */}
        <NextVideoList />
      </StyledColumnsWrap>
    </>
  );
};

export default Playing;
