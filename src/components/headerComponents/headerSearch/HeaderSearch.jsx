import React from "react";
import styled from "styled-components";
import HeaderSearchForm from "./headerSearchForm/HeaderSearchForm";
import HeaderSearchMic from "./headerSearchMic/HeaderSearchMic";

const HeaderSearchWrap = styled.div`
  max-width: 728px;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 1 728px;
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
