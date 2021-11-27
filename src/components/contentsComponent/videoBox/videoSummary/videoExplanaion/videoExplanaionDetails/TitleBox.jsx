import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import VideoData from "../../../../../../DB/VideoData.json";

const TitleBoxWrap = styled.div`
  overflow: hidden;
  /* padding-right: 24px; */
`;

const TitleWrap = styled.div`
  width: 100%;
  height: 38px;
  margin: 12px 0 4px 0;
  font-size: 14px;
  font-weight: normal;
  color: black;
  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; */
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const UserNameWrap = styled.div`
  font-size: 13px;
  color: hsl(0, 0%, 38%);
`;

const ViewsWrap = styled.div`
  font-size: 13px;
  color: hsl(0, 0%, 38%);
`;

const TitleBox = ({ videoData = {} }) => {
  // console.log("타이틀박스", videoData);
  const views = videoData.videoViews;

  const setViews = () => {
    // console.log(parseInt(views));
    if (parseInt(views) < 1000) {
      return views;
    } else if (parseInt(views) < 10000) {
      return `${views[0]}천`;
    } else if (parseInt(views) < 100000) {
      return `${views[0]}만`;
    } else if (parseInt(views) < 1000000) {
      return `${views[0] + views[1]}만`;
    } else if (parseInt(views) < 10000000) {
      return `${views[0] + views[1] + views[2]}만`;
    } else if (parseInt(views) < 100000000) {
      return `${views[0]},${views[1] + views[2] + views[3]}만`;
    } else if (parseInt(views) < 1000000000) {
      return `${views[0]}억`;
    } else if (parseInt(views) < 10000000000) {
      return `${views[0] + views[1]}억`;
    } else if (parseInt(views) < 100000000000) {
      return `${views[0] + views[1] + views[2]}억`;
    } else if (parseInt(views) < 1000000000000) {
      return `${views[0]},${views[1] + views[2] + views[3]}억`;
    }
  };

  const setYears = () => {
    // 현재 날짜
    const now = new Date();
    const thisYear = now.getFullYear();
    const thisMonth = now.getMonth() + 1;
    const today = now.getDate();

    // 업로드 날짜
    const uploadYear = parseInt(videoData.videoUploadDate.split(".")[0]);
    const uploadMonth = parseInt(videoData.videoUploadDate.split(".")[1]);
    const uploadDate = parseInt(videoData.videoUploadDate.split(".")[2]);

    const yearGap = thisYear - uploadYear;
    const monthGap = thisMonth - uploadMonth;
    const dateGap = today - uploadDate;

    return yearGap >= 1
      ? `${yearGap}년 `
      : monthGap >= 1
      ? `${monthGap}개월 `
      : `${dateGap}일 `;
  };

  return (
    <Link to={`/playing/${videoData.videoNo}/${videoData.videoTitle}`}>
      <TitleBoxWrap>
        <TitleWrap className="next_vdieo">{videoData.mainTitle}</TitleWrap>
        <div>
          <UserNameWrap>{videoData.userName}</UserNameWrap>
          <ViewsWrap>
            조회수 {setViews()}회・{setYears()}전
          </ViewsWrap>
        </div>
      </TitleBoxWrap>
    </Link>
  );
};

export default TitleBox;
