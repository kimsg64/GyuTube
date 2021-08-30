import React from "react";
import styled from "styled-components";
import HeaderLogoMainLogo from "../headerLogoMainLogo/HeaderLogoMainLogo";
import HeaderLogoOpenMenu from "../headerLogoOpenMenu/HeaderLogoOpenMenu";
import HiddenMenuGuideHome from "./hiddenMenuGuideHome/HiddenMenuGuideHome";

const HiddenMenuWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  transition-duration: 0.2s;
  flex-direction: column;
  z-index: 3;

  .sup {
    display: none;
  }
`;

const BlackArea = styled.div`
  position: absolute;
  background-color: black;
  /* top: -56px; */
  left: 240px;
  opacity: 0.3;
  height: calc(100vh + 56px);
  width: calc(100vw - 240px);
  transition-duration: 0.2s;
  z-index: 1;
`;

const HiddenMenuLogoWrap = styled.div`
  height: 55.5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* margin-left: 16px; */
  padding-left: 16px;
  border-bottom: solid 1px hsl(0, 0%, 80%);
`;

const HiddenMenuGuideWrap = styled.div`
  width: 100%;
  height: calc(100% - 56px);
  background-color: white;
`;

const HeaderLogoHiddenMenu = ({ willBeShown, setWillBeShown }) => {
  const onClickLogo = () => {
    setWillBeShown(!willBeShown);
  };

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
      <BlackArea
        onClick={onClickLogo}
        className={willBeShown ? "display__on" : "display__off"}
      />
    </HiddenMenuWrap>
  );
};

export default HeaderLogoHiddenMenu;
