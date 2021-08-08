import React from "react";
import styled from "styled-components";

const HeaderLogoOpenMenuWrap = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderLogoOpenMenu = () => {
  return (
    <HeaderLogoOpenMenuWrap>
      <i className="fas fa-bars"></i>
    </HeaderLogoOpenMenuWrap>
  );
};

export default HeaderLogoOpenMenu;
