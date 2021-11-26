import React from "react";
import styled from "styled-components";
import TitleBox from "../../contentsComponent/videoBox/videoSummary/videoExplanaion/videoExplanaionDetails/TitleBox";
import VideoData from "../../../DB/VideoData.json";
import { Link } from "react-router-dom";
import MenuBox from "../../contentsComponent/videoBox/videoSummary/videoExplanaion/videoExplanaionDetails/MenuBox";

const NextVideoListWrap = styled.aside`
  display: flex;
  flex-direction: column;
`;

const NextVideoBoxWrap = styled.div`
  width: 100%;
  height: 94px;
  margin-bottom: 8px;
  display: flex;
`;

const NextVideoBox = styled.div`
  width: 168px;
  height: 94px;
  margin-right: 8px;
  video {
    width: 166px;
    height: 94px;
    background-color: black;
  }
`;

const NextVideoExplanation = styled.div`
  width: calc(100% - 176px);
  display: flex;
  :hover {
    cursor: pointer;
  }
  :hover .fa-ellipsis-v {
    display: flex;
  }
  .next_vdieo {
    margin-top: 0;
  }
  .globalIconBtn {
    width: 24px;
    height: 24px;
  }
`;

const NextVideoTitleWrap = styled.div`
  width: calc(100% - 24px);
`;

const NextVideoList = ({ willBeSent = {} }) => {
  console.log(willBeSent);

  const setCandidates = () => {
    const candidates = [];
    for (let i = 0; i < VideoData.videos.length; i++) {
      candidates.push(i + 1001);
    }
    return candidates;
  };

  const setRandomNumber = () => {
    const candidates = setCandidates();
    const randomlySorted = [];
    // console.log(randomlySorted);
    // console.log(candidates[VideoData.videos.length - 1]);
    while (true) {
      const chosen =
        candidates[VideoData.videos.length - 1] -
        Math.floor(Math.random() * VideoData.videos.length);
      if (!randomlySorted.includes(chosen)) {
        randomlySorted.push(chosen);
      }
      if (randomlySorted.length === candidates.length) {
        break;
      }
    }
    // console.log(randomlySorted);
    return randomlySorted;
  };

  const matchVideos = () => {
    const randomlySorted = setRandomNumber();
    // console.log(VideoData.videos);
    // console.log(randomlySorted);
    const matchedVideos = [];
    randomlySorted.forEach((randomNumber) => {
      for (let i = 0; i < VideoData.videos.length; i++) {
        if (randomNumber !== parseInt(willBeSent.videoNo)) {
          if (randomNumber === parseInt(VideoData.videos[i].videoNo)) {
            matchedVideos.push(VideoData.videos[i]);
            break;
          }
        }
      }
    });
    // console.log(matchedVideos);
    return matchedVideos;
  };

  const onMouseEnterVideo = (e) => {
    e.target.play();
  };

  const onMouseOutVideo = (e) => {
    e.target.pause();
    e.target.currentTime = 0;
  };

  return (
    <NextVideoListWrap>
      {matchVideos().map((video) => {
        // console.log(video);
        return (
          <NextVideoBoxWrap>
            <NextVideoBox>
              <Link to={`/playing/${video.videoNo}/${video.videoTitle}`}>
                <video
                  src={`${process.env.PUBLIC_URL}/videos/${video.videoTitle}.mp4`}
                  onMouseEnter={onMouseEnterVideo}
                  onMouseOut={onMouseOutVideo}
                  muted={true}
                />
              </Link>
            </NextVideoBox>
            <NextVideoExplanation>
              <NextVideoTitleWrap>
                <TitleBox videoData={video} />
              </NextVideoTitleWrap>
              <MenuBox />
            </NextVideoExplanation>
          </NextVideoBoxWrap>
        );
      })}
    </NextVideoListWrap>
  );
};

export default NextVideoList;
