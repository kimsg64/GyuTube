import React from "react";
import styled from "styled-components";
import HeaderLogoMainLogo from "./headerLogoMainLogo/HeaderLogoMainLogo";
import HeaderLogoOpenMenu from "./headerLogoOpenMenu/HeaderLogoOpenMenu";

const HeaderLogoWrap = styled.div`
  width: 169px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderLogo = () => {
  return (
    <HeaderLogoWrap>
      <HeaderLogoOpenMenu />
      <HeaderLogoMainLogo />
    </HeaderLogoWrap>
  );
};

export default HeaderLogo;
