import React from "react";
import styled from "styled-components";
import HiddenMenuAboutGyutube from "./hiddenMenuAboutGyutube/HiddenMenuAboutGyutube";
import HiddenMenuHome from "./hiddenMenuHome/HiddenMenuHome";
import HiddenMenuPreference from "./hiddenMenuPreference/HiddenMenuPreference";
import HiddenMenuSettings from "./hiddenMenuSettings/HiddenMenuSettings";
import HiddenMenuSubscription from "./hiddenMenuSubscription/HiddenMenuSubscription";
import HiddenMenuCopyRight from "./hiddenMenuCopyRight/HiddenMenuCopyRight";

const HiddenMenuGuideHomeWrap = styled.div`
  width: inherit;
  height: 100%;
  /* display: flex; */
  /* flex-direction: column; */
  display: inline-block;
  overflow-y: scroll;
`;

const HiddenMenuGuideHome = () => {
  return (
    <HiddenMenuGuideHomeWrap>
      <HiddenMenuHome />
      <HiddenMenuPreference />
      <HiddenMenuSubscription />
      <HiddenMenuAboutGyutube />
      <HiddenMenuSettings />
      <HiddenMenuCopyRight />
    </HiddenMenuGuideHomeWrap>
  );
};

export default HiddenMenuGuideHome;

// 글자 크기 맞추고 패딩 조절하기
