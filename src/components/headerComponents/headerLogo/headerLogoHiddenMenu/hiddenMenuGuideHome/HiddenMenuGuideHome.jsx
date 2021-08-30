import React, { useState } from "react";
import styled from "styled-components";
import HiddenMenuAboutGyutube from "./hiddenMenuAboutGyutube/HiddenMenuAboutGyutube";
import HiddenMenuHome from "./hiddenMenuHome/HiddenMenuHome";
import HiddenMenuPreference from "./hiddenMenuPreference/HiddenMenuPreference";
import HiddenMenuSettings from "./hiddenMenuSettings/HiddenMenuSettings";
import HiddenMenuSubscription from "./hiddenMenuSubscription/HiddenMenuSubscription";
import HiddenMenuCopyRight from "./hiddenMenuCopyRight/HiddenMenuCopyRight";

const HiddenMenuGuideHomeWrap = styled.div`
  width: 100%;
  height: 100%;
  /* display: inline-block; */
  overflow-y: scroll;
`;

const HiddenMenuGuideHome = () => {
  const [isSelected, setIsSelected] = useState("Home");
  return (
    <HiddenMenuGuideHomeWrap>
      <HiddenMenuHome isSelected={isSelected} setIsSelected={setIsSelected} />
      <HiddenMenuPreference
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
      <HiddenMenuSubscription
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
      <HiddenMenuAboutGyutube
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
      <HiddenMenuSettings
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
      <HiddenMenuCopyRight />
    </HiddenMenuGuideHomeWrap>
  );
};

export default HiddenMenuGuideHome;
