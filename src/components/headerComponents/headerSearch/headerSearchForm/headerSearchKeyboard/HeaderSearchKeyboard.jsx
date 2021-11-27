import React from "react";
import styled from "styled-components";
// import EnglishKeyboard from "./EnglishKeyboard";
// import JapaneseKeyboard from "./JapaneseKeyboard";
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
    width: 850px;
  }
`;

// https://hodgef.com/simple-keyboard/getting-started/react/ 참조(documentation / layout)
// 콘솔 창의 SimpleKeyboardInstances 참조
// caps Lock, Shift, enter 제어
// 혹은 키보드를 새로 만들기...

const HeaderSearchKeyboard = ({
  virtualKeyboardInput = "",
  setVirtualKeyboardInput = () => {},
  showVirtualKeyboard = false,
  setShowVirtualKeyboard = () => {},
}) => {
  const onClickBtn = () => {
    // console.log(showKeyBoard);
    setShowVirtualKeyboard(!showVirtualKeyboard);
    showVirtualKeyboard
      ? setVirtualKeyboardInput(virtualKeyboardInput)
      : setVirtualKeyboardInput("");
  };

  return (
    <HeaderSearchFormKeyboard>
      {showVirtualKeyboard ? (
        <KoreanKeyboard setVirtualKeyboardInput={setVirtualKeyboardInput} />
      ) : null}
      <i className="far fa-keyboard" onClick={onClickBtn}></i>
    </HeaderSearchFormKeyboard>
  );
};

export default HeaderSearchKeyboard;
