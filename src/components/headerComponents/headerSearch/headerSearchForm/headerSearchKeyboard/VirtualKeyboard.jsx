import React, { useState } from "react";
import KeyboardReact from "react-simple-keyboard";
import korean from "simple-keyboard-layouts/build/layouts/korean";
import japanese from "simple-keyboard-layouts/build/layouts/japanese";
import english from "simple-keyboard-layouts/build/layouts/english";

import "react-simple-keyboard/build/css/index.css";

const VirtualKeyboard = ({
  setValue = () => {},
  virtualKeyboardInput = "",
  setVirtualKeyboardInput = () => {},
  setShowVirtualKeyboard = () => {},
}) => {
  const [language, setLanguage] = useState(english);
  const [layoutState, setLayoutState] = useState("default");
  const onChange = (input) => {
    console.log("Input changed", input);
    setVirtualKeyboardInput(input);
  };

  const onKeyPress = (button) => {
    console.log(button);
    if (button === "{bksp}") {
      setVirtualKeyboardInput((prevInput) => {
        return prevInput.slice(0, -1);
      });
    } else if (button === "{enter}") {
      setValue(virtualKeyboardInput);
      setShowVirtualKeyboard(false);
    } else if (button === "{shift}") {
      // shift 로직 생각해보자...
    } else if (button === "{lock}") {
      layoutState === "default"
        ? setLayoutState("shift")
        : setLayoutState("default");
    } else if (button === "{tab}") {
      // tab으로 layout 변경해보자... 이왕이면 글자도 바꾸자
      language === korean
        ? setLanguage(english)
        : language === english
        ? setLanguage(japanese)
        : setLanguage(korean);
    }
  };
  return (
    <KeyboardReact
      onChange={onChange}
      onKeyPress={onKeyPress}
      layout={language.layout}
      layoutName={layoutState}
      mergeDisplay={true}
    />
  );
};

export default VirtualKeyboard;
