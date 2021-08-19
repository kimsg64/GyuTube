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
`;

const VideoBtns = () => {
  return (
    <VideoBtnsWrap>
      <BtnsBox>
        <BtnWrap className="like">
          <IconsWrap className="globalIconBtn">
            <i className="fas fa-thumbs-up"></i>
          </IconsWrap>
          <div>55.1천</div>
        </BtnWrap>
        <BtnWrap className="like">
          <IconsWrap className="globalIconBtn">
            <i className="fas fa-thumbs-down"></i>
          </IconsWrap>
          <div>1천</div>
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
