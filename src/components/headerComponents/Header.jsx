import React from "react";
import styled from "styled-components";
import HeaderLogo from "./headerLogo/HeaderLogo";
import HeaderSearch from "./headerSearch/HeaderSearch";
import HeaderBtns from "./headerBtns/HeaderBtns";

const HeaderStyle = styled.div`
  padding: 0 16px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  left: 0px;
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
