import React from "react";
import styled from "styled-components";

const NavigatorSubscriptionWrap = styled.div`
  width: inherit;
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigatorSubscription = () => {
  return (
    <NavigatorSubscriptionWrap>
      <i class="fas fa-layer-group"></i>
    </NavigatorSubscriptionWrap>
  );
};

export default NavigatorSubscription;
