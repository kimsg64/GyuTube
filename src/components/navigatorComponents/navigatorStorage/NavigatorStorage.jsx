import React from "react";
import styled from "styled-components";

const NavigatorStorageWrap = styled.div`
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

const NavigatorStorage = ({
  isSelected = "Home",
  setIsSelected = () => {},
}) => {
  const onClickStorage = () => {
    setIsSelected("Storage");
  };
  return (
    <NavigatorStorageWrap
      className={`globalIconBtnRect ${
        isSelected === "Storage" ? "selected" : null
      }`}
      onClick={onClickStorage}
    >
      <i className="fas fa-clone"></i>
      <div className="text">보관함</div>
    </NavigatorStorageWrap>
  );
};

export default NavigatorStorage;
