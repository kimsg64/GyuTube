import React from "react";
import KeyboardReact from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import layout from "simple-keyboard-layouts/build/layouts/korean";

const KoreanKeyboard = ({ setVirtualKeyboardInput = () => {} }) => {
  const onChange = (input) => {
    console.log("Input changed", input);
    setVirtualKeyboardInput(input);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  };
  return <KeyboardReact onChange={onChange} onKeyPress={onKeyPress} />;
};

export default KoreanKeyboard;
