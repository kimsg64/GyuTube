import React from "react";
import styled from "styled-components";
import NavigatorCompass from "./navigatorCompass/NavigatorCompass";
import NavigatorHome from "./navigatorHome/NavigatorHome";
import NavigatorSubscription from "./navigatorSubscription/NavigatorSubscription";
import NavigatorStorage from "./navigatorStorage/NavigatorStorage";

const NavigatorWrap = styled.div`
  width: 72px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: sticky;
  top: 56px;
  left: 0;
`;

const Navigator = () => {
  return (
    <NavigatorWrap>
      <NavigatorHome></NavigatorHome>
      <NavigatorCompass></NavigatorCompass>
      <NavigatorSubscription></NavigatorSubscription>
      <NavigatorStorage></NavigatorStorage>
    </NavigatorWrap>
  );
};

export default Navigator;
