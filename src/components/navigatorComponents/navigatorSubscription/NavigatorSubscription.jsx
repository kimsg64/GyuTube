import React from "react";
import styled from "styled-components";

const NavigatorSubscriptionWrap = styled.div`
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

const NavigatorSubscription = () => {
  return (
    <NavigatorSubscriptionWrap>
      <i className="fas fa-layer-group"></i>
      <div className="text">보관함</div>
    </NavigatorSubscriptionWrap>
  );
};

export default NavigatorSubscription;
