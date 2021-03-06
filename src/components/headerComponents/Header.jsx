import React from "react";
import styled from "styled-components";
import HeaderLogo from "./headerLogo/HeaderLogo";
import HeaderSearch from "./headerSearch/HeaderSearch";
import HeaderBtns from "./headerBtns/HeaderBtns";

const HeaderStyle = styled.header`
  width: 100%;
  height: 56px;
  padding-left: 16px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
  top: 0px;
  left: 0px;
  background-color: white;
`;

const Header = ({ setSearchedByKeyword = () => {} }) => {
  return (
    <HeaderStyle>
      <HeaderLogo setSearchedByKeyword={setSearchedByKeyword} />
      <HeaderSearch setSearchedByKeyword={setSearchedByKeyword} />
      <HeaderBtns />
    </HeaderStyle>
  );
};

export default Header;
