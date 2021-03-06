import React from "react";
import styled from "styled-components";

const NavigatorCompassWrap = styled.div`
  width: inherit;
  height: 74px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    margin-top: 6px;
    font-size: 10px;
  }
`;

const NavigatorCompass = ({
  isSelected = "Home",
  setIsSelected = () => {},
}) => {
  const onClickCompass = () => {
    setIsSelected("Compass");
  };
  return (
    <NavigatorCompassWrap
      className={`globalIconBtnRect ${
        isSelected === "Compass" ? "selected" : null
      }`}
      onClick={onClickCompass}
    >
      <i className="fas fa-compass"></i>
      <div className="text">탐색</div>
    </NavigatorCompassWrap>
  );
};

export default NavigatorCompass;
