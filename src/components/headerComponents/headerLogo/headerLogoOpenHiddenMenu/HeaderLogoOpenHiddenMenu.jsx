import React from "react";
import styled from "styled-components";
import HeaderLogoMainLogo from "../headerLogoMainLogo/HeaderLogoMainLogo";
import HeaderLogoOpenMenu from "../headerLogoOpenMenu/HeaderLogoOpenMenu";
import HiddenMenuGuideHome from "./hiddenMenuGuideHome/HiddenMenuGuideHome";

const HiddenMenuWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  /* height: 1000px; */
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  transition-duration: 0.2s;
  flex-direction: column;

  .sup {
    display: none;
  }
`;

const HiddenMenuLogoWrap = styled.div`
  height: 55.5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 16px;
  padding-left: 16px;
  border-bottom: solid 1px hsl(0, 0%, 80%);
`;

const HiddenMenuGuideWrap = styled.div`
  width: 100%;
  height: calc(100% - 56px);
  background-color: white;
`;

const HeaderLogoOpenHiddenMenu = ({ willBeShown, setWillBeShown }) => {
  return (
    <HiddenMenuWrap className={willBeShown ? "visible" : "invisible"}>
      <HiddenMenuLogoWrap className={willBeShown ? "visible" : "invisible"}>
        <HeaderLogoOpenMenu
          willBeShown={willBeShown}
          setWillBeShown={setWillBeShown}
        />
        <HeaderLogoMainLogo />
      </HiddenMenuLogoWrap>
      <HiddenMenuGuideWrap>
        <HiddenMenuGuideHome />
      </HiddenMenuGuideWrap>
    </HiddenMenuWrap>
  );
};

export default HeaderLogoOpenHiddenMenu;
