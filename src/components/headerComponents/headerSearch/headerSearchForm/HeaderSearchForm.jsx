import React from "react";
import styled from "styled-components";
import HeaderSearchBtn from "./headerSearchBtn/HeaderSearchBtn";
import HeaderSearchKeyboard from "./headerSearchKeyboard/HeaderSearchKeyboard";

const HeaderSearchFormWrap = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  border: solid 1.5px hsl(0, 0%, 80%);
  padding-left: 4px;
  margin-left: 40px;
  position: reltive;
`;

const HeaderSearchFormBar = styled.div`
  width: 100%;
  max-width: 575;
  display: flex;
  .search_input {
    width: 100%;
    border: none;
    outline: none;
  }
`;

const HeaderSearchForm = () => {
  return (
    <HeaderSearchFormWrap>
      <HeaderSearchFormBar>
        <input placeholder="검색" className="search_input" />
        <HeaderSearchKeyboard />
      </HeaderSearchFormBar>
      <HeaderSearchBtn />
    </HeaderSearchFormWrap>
  );
};

export default HeaderSearchForm;
