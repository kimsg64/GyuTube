import React, { useState } from "react";
import styled from "styled-components";
import HeaderLogoMainLogo from "./headerLogoMainLogo/HeaderLogoMainLogo";
import HeaderLogoOpenMenu from "./headerLogoOpenMenu/HeaderLogoOpenMenu";
import HeaderLogoHiddenMenu from "./headerLogoHiddenMenu/HeaderLogoHiddenMenu";

const HeaderLogoWrap = styled.div`
  width: 169px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .visible {
    width: 240px;
    visibility: visible;
  }
  .invisible {
    width: 0;
    visibility: hidden;
  }
`;

const HeaderLogo = () => {
  const [willBeShown, setWillBeShown] = useState(false);

  return (
    <HeaderLogoWrap>
      <HeaderLogoOpenMenu
        willBeShown={willBeShown}
        setWillBeShown={setWillBeShown}
      />
      <HeaderLogoMainLogo />
      <HeaderLogoHiddenMenu
        willBeShown={willBeShown}
        setWillBeShown={setWillBeShown}
      />
    </HeaderLogoWrap>
  );
};

export default HeaderLogo;
