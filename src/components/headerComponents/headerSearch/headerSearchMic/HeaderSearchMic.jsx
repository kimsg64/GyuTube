import React from "react";
import styled from "styled-components";

const HeaderSearchMicWrap = styled.div`
  width: calc(36px - 8px);
  height: calc(36px - 8px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 0%, 96%);
  border-radius: 100%;
  padding: 8px;
`;

const HeaderSearchMic = () => {
  return (
    <HeaderSearchMicWrap>
      <i className="fas fa-microphone"></i>
    </HeaderSearchMicWrap>
  );
};

export default HeaderSearchMic;
