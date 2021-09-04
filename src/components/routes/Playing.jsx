import React from "react";
import Header from "../headerComponents/Header";
import styled from "styled-components";
import VideoTitle from "../playingPage/primaryComponents/videoInfo/VideoTitle";
import VideoInfo from "../playingPage/primaryComponents/videoInfo/VideoInfo";
import VideoMeta from "../playingPage/primaryComponents/videoMeta/VideoMeta";
import VideoComments from "../playingPage/primaryComponents/videoComments/VideoComments";
import NextVideoList from "../playingPage/asideComponents/NextVideoList";
import VideoData from "../../DB/VideoData.json";

const StyledPage = styled.div`
  position: absolute;
  width: 100%;
`;

const StyledArticle = styled.article`
  width: 100%;
  /* padding-top: 56px; */
  background-color: hsl(0, 0%, 98%);
  display: flex;
  justify-content: center;
`;

const StyledColumnsWrap = styled.div`
  width: calc(100% - 56px - 60px);
  height: 100%;
  background-color: hsl(0, 0%, 98%);
  position: relative;
  top: 56px;
  display: flex;
  flex-direction: row;

  /* aside */
  /* width 1175px보다 작으면 레이아웃 배치 변경 */
  aside {
    height: auto;
    flex: 1 1 25%;
    padding: 24px 24px 0 0;
  }
`;

const PrimaryWrap = styled.div`
  flex: 1 1 50%;
  padding: 24px 24px 0 0;
  margin-left: 24px;
`;

const PlayerWrap = styled.div`
  max-width: 1280px;
  max-height: 720px;
  display: flex;
  justify-content: center;
`;

// 화면이 줄어들면 가로만 좁아짐
const VideoBox = styled.div`
  width: 100%;
  video {
    width: 100%;
    height: 100%;
  }
`;

const InfoWrap = styled.div`
  padding: 20px 0 8px 0;
`;

const Playing = ({ match = {} }) => {
  // console.log(match);
  const { params } = match;
  // console.log("파람스! ", params.videoNo, params.videoTitle);
  // console.log("DB!!!", VideoData);

  const willBeSent = VideoData.videos.find(
    (video) => video.videoNo === params.videoNo
  );
  // console.log(willBeSent.videoNo);

  return (
    <StyledPage>
      <Header />
      <StyledArticle>
        <StyledColumnsWrap>
          <PrimaryWrap>
            <PlayerWrap>
              {/* 경로를 ./으로 하면 안되고 다 지우거나 ../로 하니까 된다. */}
              {/* 리액트 라우터가 마치 url을 이동하고 있는 것 같이 생겼지만 사실은 그냥 컴포넌트 갈아끼워서 페이지 이동한 것 처럼 보이게하는 눈속임 마술을 부리는 새끼라서  */}
              <VideoBox>
                <video src={`/videos/${willBeSent.videoTitle}.mp4`} controls />
              </VideoBox>
            </PlayerWrap>

            <InfoWrap>
              <VideoTitle
                mainTitle={willBeSent.mainTitle}
                hashtags={willBeSent.hashtags}
              />
              <VideoInfo
                videoViews={willBeSent.videoViews}
                videoUploadDate={willBeSent.videoUploadDate}
                videoThumbUp={willBeSent.videoThumbUp}
                videoThumbDown={willBeSent.videoThumbDown}
              />
            </InfoWrap>

            <VideoMeta willBeSent={willBeSent} />

            <VideoComments willBeSent={willBeSent} />
          </PrimaryWrap>
          <NextVideoList willBeSent={willBeSent} />
        </StyledColumnsWrap>
      </StyledArticle>
    </StyledPage>
  );
};

export default Playing;
