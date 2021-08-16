import React from "react";
import styled from "styled-components";
import ReportAndScripts from "./reportAndScripts/ReportAndScripts";

const VideoBtnsWrap = styled.div`
  display: flex;
  align-items: center;
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
  .fas {
    transform: none;
  }
`;

const VideoBtns = () => {
  return (
    <VideoBtnsWrap>
      <BtnsBox>
        <BtnWrap className="like">
          <i className="fas fa-thumbs-up"></i>
          <div>55.1천</div>
        </BtnWrap>
        <BtnWrap className="like">
          <i className="fas fa-thumbs-down"></i>
          <div>1천</div>
        </BtnWrap>
        <BtnWrap>
          <i className="fas fa-share"></i>
          <div>공유</div>
        </BtnWrap>
        <BtnWrap>
          <i className="fas fa-plus-square"></i>
          <div>저장</div>
        </BtnWrap>
      </BtnsBox>
      <ReportAndScripts></ReportAndScripts>
    </VideoBtnsWrap>
  );
};

export default VideoBtns;
