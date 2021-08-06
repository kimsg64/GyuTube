import React from "react";
import styled from "styled-components";

const NavigatorCompassWrap = styled.div`
  width: inherit;
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigatorCompass = () => {
  return (
    <NavigatorCompassWrap>
      <i class="fas fa-compass"></i>
    </NavigatorCompassWrap>
  );
};

export default NavigatorCompass;
