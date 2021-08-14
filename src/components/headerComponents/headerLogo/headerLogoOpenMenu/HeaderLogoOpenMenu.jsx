import React, { useState } from "react";
import styled from "styled-components";

const HeaderLogoOpenMenuWrap = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
`;

const HeaderLogoOpenMenu = ({ willBeShown, setWillBeShown }) => {
  const onClickLogo = () => {
    willBeShown ? setWillBeShown(false) : setWillBeShown(true);
  };

  return (
    <HeaderLogoOpenMenuWrap onClick={onClickLogo}>
      <i className="fas fa-bars"></i>
    </HeaderLogoOpenMenuWrap>
  );
};

export default HeaderLogoOpenMenu;
