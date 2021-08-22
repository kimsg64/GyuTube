import React from "react";
import styled from "styled-components";
import ReportAndScripts from "./reportAndScripts/ReportAndScripts";

const VideoBtnsWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 350.75px;
`;

const BtnsBox = styled.div`
  flex-shrink: 0;
  display: flex;
`;

const BtnWrap = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

const IconsWrap = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const LikeLine = styled.span`
  position: absolute;
  height: 1px;
  width: 92px;
  border: 2px solid hsl(0, 0%, 40%);
  top: 44px;
  left: -6px;
`;

const VideoBtns = ({ videoThumbUp = "", videoThumbDown = "" }) => {
  const setNumFormat = (number) => {
    const num = parseInt(number);
    if (num < 1000) {
      return num;
    } else if (num < 10000) {
      if (number[1] === "0") {
        return `${number[0]}천`;
      } else {
        return `${number[0]}.${number[1]}천`;
      }
    } else {
      return `${number[0]}.${number[1]}만`;
    }
  };

  return (
    <VideoBtnsWrap>
      <BtnsBox>
        <BtnWrap>
          <IconsWrap className="globalIconBtn">
            <i className="fas fa-thumbs-up"></i>
            <LikeLine />
          </IconsWrap>
          <div>{setNumFormat(videoThumbUp)}</div>
        </BtnWrap>
        <BtnWrap>
          <IconsWrap className="globalIconBtn">
            <i className="fas fa-thumbs-down"></i>
            <LikeLine />
          </IconsWrap>
          <div>{setNumFormat(videoThumbDown)}</div>
        </BtnWrap>
        <BtnWrap>
          <IconsWrap className="globalIconBtn">
            <i className="fas fa-share"></i>
          </IconsWrap>
          <div>공유</div>
        </BtnWrap>
        <BtnWrap>
          <IconsWrap className="globalIconBtn">
            <i className="fas fa-plus-square"></i>
          </IconsWrap>
          <div>저장</div>
        </BtnWrap>
      </BtnsBox>
      <ReportAndScripts />
    </VideoBtnsWrap>
  );
};

export default VideoBtns;
