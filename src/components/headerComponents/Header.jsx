import React from "react";
import styled from "styled-components";
import HeaderLogo from "./headerLogo/HeaderLogo";
import HeaderSearch from "./headerSearch/HeaderSearch";
import HeaderBtns from "./headerBtns/HeaderBtns";

const HeaderStyle = styled.header`
  width: 97%;
  height: 56px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  z-index: 20;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: white;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderLogo />
      <HeaderSearch />
      <HeaderBtns />
    </HeaderStyle>
  );
};

export default Header;
