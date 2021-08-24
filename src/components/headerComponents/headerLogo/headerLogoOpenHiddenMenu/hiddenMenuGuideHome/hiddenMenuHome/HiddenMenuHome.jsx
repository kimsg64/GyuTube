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
  padding: 0 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .text {
    display: none;
  }
  :hover {
    cursor: pointer;
    background-color: var(--hover-bg-color);
  }
  :active {
    background-color: var(--active-bg-color);
  }
`;

const TextBar = styled.div`
  width: 144px;
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
`;

const IconWrap = styled.div`
  width: 30px;
  margin-right: 18px;
  div {
    height: 40px;
  }
`;

const HiddenMenuHome = () => {
  return (
    <HiddenMenuHomeWrap>
      <ItemBar className="selected">
        <IconWrap>
          <NavigatorHome />
        </IconWrap>
        <TextBar>홈</TextBar>
      </ItemBar>
      <ItemBar>
        <IconWrap>
          <NavigatorCompass />
        </IconWrap>
        <TextBar>탐색</TextBar>
      </ItemBar>
      <ItemBar>
        <IconWrap>
          <NavigatorSubscription />
        </IconWrap>
        <TextBar>구독</TextBar>
      </ItemBar>
    </HiddenMenuHomeWrap>
  );
};

export default HiddenMenuHome;
