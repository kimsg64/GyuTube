import React, { useState } from "react";
import styled from "styled-components";
import EnglishKeyboard from "./EnglishKeyboard";
import JapaneseKeyboard from "./JapaneseKeyboard";
import KoreanKeyboard from "./KoreanKeyboard";

const HeaderSearchFormKeyboard = styled.div`
  width: 31px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  position: relative;
  .fa-keyboard {
    color: hsl(0, 0%, 38%);
  }
  .fa-keyboard:hover {
    cursor: pointer;
    color: black;
  }
  .simple-keyboard {
    position: absolute;
    top: 56px;
    width: auto;
  }
`;

const HeaderSearchKeyboard = () => {
  const [showKeyBoard, setShowKeyBoard] = useState(false);

  const onChange = (input) => {
    console.log("Input changed", input);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  };

  const onBtnClick = () => {
    // console.log(showKeyBoard);
    setShowKeyBoard(!showKeyBoard);
  };

  return (
    <HeaderSearchFormKeyboard onClick={onBtnClick}>
      {showKeyBoard ? <EnglishKeyboard /> : null}
      <i className="far fa-keyboard"></i>
    </HeaderSearchFormKeyboard>
  );
};

export default HeaderSearchKeyboard;
