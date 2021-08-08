import React from "react";
import styled from "styled-components";

const NavigatorHomeWrap = styled.div`
  width: inherit;
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigatorHome = () => {
  return (
    <NavigatorHomeWrap>
      <i className="fas fa-home"></i>
    </NavigatorHomeWrap>
  );
};

export default NavigatorHome;
