import React, { useState } from "react";
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
  position: relative;
  .globalBlackExplanation {
    white-space: nowrap;
  }
`;

const LikeLine = styled.span`
  position: absolute;
  height: 1px;
  width: 80px;
  border: 2px solid hsl(0, 0%, 40%);
  top: 44px;
  left: -6px;
`;

const VideoBtns = ({ videoThumbUp = "", videoThumbDown = "" }) => {
  const [willBeShown, setWillBeShown] = useState(false);
  // 이벤트가 undefined...
  const showBlackExplanation = (e) => {
    console.log(e.target.value);
    console.log(this);
    setWillBeShown(true);
  };
  const hideBlackExplanation = (e) => {
    console.log(e.target.value);
    console.log(this);
    setWillBeShown(false);
  };
  const setNumFormat = (number) => {
    const num = parseInt(number);
    if (num < 1000) {
      return num;
    } else if (num < 10000) {
      return number[1] === "0"
        ? `${number[0]}천`
        : `${number[0]}.${number[1]}천`;
    } else {
      return `${number[0]}.${number[1]}만`;
    }
  };

  return (
    <VideoBtnsWrap>
      <BtnsBox>
        <BtnWrap
          onMouseEnter={showBlackExplanation}
          onMouseLeave={hideBlackExplanation}
        >
          <IconsWrap className="globalIconBtn">
            <i className="fas fa-thumbs-up"></i>
            <div
              className={`globalBlackExplanation ${
                willBeShown ? "display__on" : "display__off"
              }`}
            >
              이 동영상이 마음에 듭니다.
            </div>
            <LikeLine />
          </IconsWrap>
          <div>{setNumFormat(videoThumbUp)}</div>
        </BtnWrap>
        <BtnWrap
          onMouseEnter={showBlackExplanation}
          onMouseLeave={hideBlackExplanation}
        >
          <IconsWrap className="globalIconBtn">
            <i className="fas fa-thumbs-down"></i>
            <div
              className={`globalBlackExplanation ${
                willBeShown ? "display__on" : "display__off"
              }`}
            >
              이 동영상이 마음에 들지 않습니다.
            </div>
            <LikeLine />
          </IconsWrap>
          <div>{setNumFormat(videoThumbDown)}</div>
        </BtnWrap>
        <BtnWrap
          onMouseEnter={showBlackExplanation}
          onMouseLeave={hideBlackExplanation}
        >
          <IconsWrap className="globalIconBtn">
            <i className="fas fa-share"></i>
            <div
              className={`globalBlackExplanation ${
                willBeShown ? "display__on" : "display__off"
              }`}
            >
              공유
            </div>
          </IconsWrap>
          <div>공유</div>
        </BtnWrap>
        <BtnWrap
          onMouseEnter={showBlackExplanation}
          onMouseLeave={hideBlackExplanation}
        >
          <IconsWrap className="globalIconBtn">
            <i className="fas fa-plus-square"></i>
            <div
              className={`globalBlackExplanation ${
                willBeShown ? "display__on" : "display__off"
              }`}
            >
              저장
            </div>
          </IconsWrap>
          <div>저장</div>
        </BtnWrap>
      </BtnsBox>
      <ReportAndScripts />
    </VideoBtnsWrap>
  );
};

export default VideoBtns;
