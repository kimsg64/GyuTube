import React, { useState } from "react";
import styled from "styled-components";
import NavigatorCompass from "./navigatorCompass/NavigatorCompass";
import NavigatorHome from "./navigatorHome/NavigatorHome";
import NavigatorSubscription from "./navigatorSubscription/NavigatorSubscription";
import NavigatorStorage from "./navigatorStorage/NavigatorStorage";

const NavigatorWrap = styled.aside`
  width: 72px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  top: 56px;
  left: 0;
  background-color: white;

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const Navigator = () => {
  const [isSelected, setIsSelected] = useState("Home");
  return (
    <NavigatorWrap>
      <NavigatorHome isSelected={isSelected} setIsSelected={setIsSelected} />
      <NavigatorCompass isSelected={isSelected} setIsSelected={setIsSelected} />
      <NavigatorSubscription
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
      <NavigatorStorage isSelected={isSelected} setIsSelected={setIsSelected} />
    </NavigatorWrap>
  );
};

export default Navigator;
