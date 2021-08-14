import React from "react";
import NavigatorHome from "../../../../../navigatorComponents/navigatorHome/NavigatorHome";
import NavigatorCompass from "../../../../../navigatorComponents/navigatorCompass/NavigatorCompass";
import NavigatorSubscription from "../../../../../navigatorComponents/navigatorSubscription/NavigatorSubscription";
import styled from "styled-components";

const HiddenMenuHomeWrap = styled.div`
  border-bottom: solid 1px hsl(0, 0%, 80%);
  padding: 12px 0;
`;

const ItemBar = styled.div`
  height: 40px;
  padding: 0 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    height: 40px;
    margin-right: 24px;
  }
  .text {
    display: none;
  }
  :hover {
    cursor: pointer;
    background-color: hsl(0, 0%, 90%);
  }
  :active {
    background-color: hsl(0, 0%, 70%);
  }
`;

const TextBar = styled.div`
  width: 144px;
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
`;

const HiddenMenuHome = () => {
  return (
    <HiddenMenuHomeWrap>
      <ItemBar>
        <NavigatorHome />
        <TextBar>홈</TextBar>
      </ItemBar>
      <ItemBar>
        <NavigatorCompass />
        <TextBar>탐색</TextBar>
      </ItemBar>
      <ItemBar>
        <NavigatorSubscription />
        <TextBar>구독</TextBar>
      </ItemBar>
    </HiddenMenuHomeWrap>
  );
};

export default HiddenMenuHome;
