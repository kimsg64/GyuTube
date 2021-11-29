import React, { useState } from "react";
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

const HeaderSearch = ({ setSearchedByKeyword = () => {} }) => {
  const [value, setValue] = useState();
  // console.log(value);
  return (
    <HeaderSearchWrap>
      <HeaderSearchForm
        value={value}
        setValue={setValue}
        setSearchedByKeyword={setSearchedByKeyword}
      />
      <HeaderSearchMic setValue={setValue} />
    </HeaderSearchWrap>
  );
};

export default HeaderSearch;
