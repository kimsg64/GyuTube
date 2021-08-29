import React from "react";
import styled from "styled-components";

const HeaderUserInfoCircle = styled.div`
  /* 개인정보 창 */
  width: calc(36px - 0px);
  height: calc(36px - 2px);
  padding-bottom: 4px;
  border-radius: 100%;
  background-color: hsl(40, 91%, 60%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  :hover {
    cursor: pointer;
  }
  :active {
    transform: scale(1.05);
  }
`;

const HeaderUserInfoIcon = ({
  willBeShown = false,
  setWillBeShown = () => {},
}) => {
  const onClickBtn = () => {
    setWillBeShown(!willBeShown);
  };

  return (
    <HeaderUserInfoCircle
      className="usericon bigger__icon"
      onClick={onClickBtn}
    >
      Gyu
    </HeaderUserInfoCircle>
  );
};

export default HeaderUserInfoIcon;
