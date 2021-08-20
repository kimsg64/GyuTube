import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TitleBoxWrap = styled.div`
  overflow: hidden;
  padding-right: 24px;
  h3 {
    height: 40px;
    margin: 12px 0 4px 0;
    font-size: 14px;
    font-weight: normal;
    color: black;
  }
  div {
    /* div 나눠서 부모만 height: 36px */
    font-size: 13px;
    color: hsl(0, 0%, 38%);
  }
`;

const TitleBox = ({ videoData }) => {
  console.log("타이틀박스", videoData);
  const views = videoData.videoViews;
  console.log(views);

  const setStr = () => {
    console.log(parseInt(views));
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
  return (
    <Link to="/playing">
      <TitleBoxWrap>
        <h3>{videoData.videoTitle}</h3>
        <div>
          <div>{videoData.userName}</div>
          <div>조회수 {setStr()}회・20년 전</div>
        </div>
      </TitleBoxWrap>
    </Link>
  );
};

export default TitleBox;
