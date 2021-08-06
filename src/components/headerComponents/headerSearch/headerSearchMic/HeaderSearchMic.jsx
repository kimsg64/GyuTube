import React from "react";
import styled from "styled-components";

const HeaderSearchMicWrap = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 0%, 96%);
  border-radius: 100%;
`;

const HeaderSearchMic = () => {
  return (
    <HeaderSearchMicWrap>
      <i class="fas fa-microphone"></i>
    </HeaderSearchMicWrap>
  );
};

export default HeaderSearchMic;
