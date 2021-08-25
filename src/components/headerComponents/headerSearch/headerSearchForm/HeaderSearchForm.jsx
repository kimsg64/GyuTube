import React, { useState } from "react";
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
  const [value, setValue] = useState("");

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <HeaderSearchFormWrap>
      <HeaderSearchFormBar>
        <input
          placeholder="검색"
          className="search_input"
          value={value}
          onChange={onChangeInput}
          onSubmit={onSubmitForm}
        />
        <HeaderSearchKeyboard />
      </HeaderSearchFormBar>
      <HeaderSearchBtn />
    </HeaderSearchFormWrap>
  );
};

export default HeaderSearchForm;
