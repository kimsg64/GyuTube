import React from "react";
import styled from "styled-components";
import HeaderUserInfo from "./headerUserInfo/HeaderUserInfo";
import HeaderAddVideo from "./headerBtnsAddVideo/HeaderAddVideo";
import HeaderBtnsMenu from "./headerBtnsMenu/HeaderBtnsMenu";
import HeaderBtnsAlarm from "./headerBtnsAlarm/HeaderBtnsAlarm";

// 우측 버튼 배치
const HeaderBtnsWrap = styled.div`
  min-width: 225px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const HeaderBtns = () => {
  return (
    <HeaderBtnsWrap>
      <HeaderAddVideo />
      <HeaderBtnsMenu />
      <HeaderBtnsAlarm />
      <HeaderUserInfo />
    </HeaderBtnsWrap>
  );
};

export default HeaderBtns;
