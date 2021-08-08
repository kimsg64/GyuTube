import React from "react";
import styled from "styled-components";
import HeaderSearchForm from "./headerSearchForm/HeaderSearchForm";
import HeaderSearchMic from "./headerSearchMic/HeaderSearchMic";

const HeaderSearchWrap = styled.div`
  flex: 0 1 728px;
  min-width: 320px;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderSearch = () => {
  return (
    <HeaderSearchWrap>
      <HeaderSearchForm />
      <HeaderSearchMic />
    </HeaderSearchWrap>
  );
};

export default HeaderSearch;
