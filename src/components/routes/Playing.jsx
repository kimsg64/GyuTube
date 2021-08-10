import React from "react";
import Header from "../headerComponents/Header";
import styled from "styled-components";

const StyledColumnsWrap = styled.div`
  top: 56px;
  width: 90%;
  max-width: 1280px;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;

  div {
    flex: 6;
    padding: 24px 24px 0 0;
    margin-left: 24px;
    video {
      width: 100%;
    }
  }
  aside {
    flex: 4;
    padding: 24px 24px 0 0;
    background-color: powderblue;
  }
`;

const Playing = ({ match }) => {
  const { params } = match;
  // 재생 페이지 만들기
  console.log(params.videoName);
  return (
    <>
      <Header />
      <StyledColumnsWrap>
        <div>
          <video src={`./videos/${params.videoName}.mp4`} controls />
        </div>
        <aside>aside</aside>
      </StyledColumnsWrap>
    </>
  );
};

export default Playing;
