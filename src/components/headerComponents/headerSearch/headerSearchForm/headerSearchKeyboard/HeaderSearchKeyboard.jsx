import React from "react";
import styled from "styled-components";

const HeaderSearchFormKeyboard = styled.div`
  width: 31px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  .fa-keyboard {
    color: hsl(0, 0%, 38%);
  }
  .fa-keyboard:hover {
    cursor: pointer;
    color: black;
  }
`;

const HeaderSearchKeyboard = () => {
  return (
    <HeaderSearchFormKeyboard>
      <i className="far fa-keyboard"></i>
    </HeaderSearchFormKeyboard>
  );
};

export default HeaderSearchKeyboard;
