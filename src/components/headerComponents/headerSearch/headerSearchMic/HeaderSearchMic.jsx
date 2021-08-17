import React from "react";
import styled from "styled-components";

const HeaderSearchMicWrap = styled.div`
  width: calc(40px - 20px);
  height: calc(40px - 20px);
  /* display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 0%, 96%);
  border-radius: 100%; */
  padding: 8px;
  margin-left: 8px;
`;

const HeaderSearchMic = () => {
  return (
    <HeaderSearchMicWrap className="globalIconBtn">
      <i className="fas fa-microphone"></i>
    </HeaderSearchMicWrap>
  );
};

export default HeaderSearchMic;
