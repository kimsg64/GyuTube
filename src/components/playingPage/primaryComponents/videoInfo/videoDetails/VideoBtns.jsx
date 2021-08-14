import React from "react";
import styled from "styled-components";
import ReportAndScripts from "./reportAndScripts/ReportAndScripts";

const VideoBtnsWrap = styled.div`
  display: flex;
`;

const IconsWrap = styled.div`
  display: flex;
  div {
    margin-left: 8px;
    display: flex;
  }
`;

const VideoBtns = () => {
  return (
    <VideoBtnsWrap>
      <IconsWrap>
        <div>
          <i class="fas fa-thumbs-up"></i>55.1천
        </div>
        <div>
          <i class="fas fa-thumbs-down"></i>1천
        </div>
        <div>
          <i class="fas fa-share"></i>공유
        </div>
        <div>
          <i class="fas fa-plus-square"></i>저장
        </div>
      </IconsWrap>
      <ReportAndScripts></ReportAndScripts>
    </VideoBtnsWrap>
  );
};

export default VideoBtns;
