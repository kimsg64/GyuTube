import React from "react";
import styled from "styled-components";

const HeaderUserInfoWrap = styled.div`
  width: 60px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderUserInfoCircle = styled.div`
  /* 개인정보 창 */
  width: calc(36px - 0px);
  height: calc(36px - 4px);
  padding-bottom: 4px;
  /* padding-right: 0px; */
  border-radius: 100%;
  background-color: hsl(17, 18%, 47%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  :hover {
    transform: none;
    cursor: pointer;
  }
`;

const HeaderUserInfo = () => {
  return (
    <HeaderUserInfoWrap>
      {/* 서버 연결 후 로그인 ID로 바꾸기 */}
      <HeaderUserInfoCircle className="usericon">Gyu</HeaderUserInfoCircle>
    </HeaderUserInfoWrap>
  );
};

export default HeaderUserInfo;
