import React from "react";
import styled from "styled-components";

const NavigatorHomeWrap = styled.div`
  width: inherit;
  height: 74px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    margin-top: 6px;
    font-size: 10px;
  }
`;

const NavigatorHome = () => {
  return (
    <NavigatorHomeWrap className="globalIconBtnRect">
      <i className="fas fa-home"></i>
      <div className="text">홈</div>
    </NavigatorHomeWrap>
  );
};

export default NavigatorHome;
