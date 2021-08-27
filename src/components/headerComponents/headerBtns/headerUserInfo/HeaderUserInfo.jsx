import React, { useState } from "react";
import styled from "styled-components";
import HeaderUserInfoDetails from "./headerUserInfoDetails/HeaderUserInfoDetails";
import HeaderUserInfoIcon from "./HeaderUserInfoIcon";

const HeaderUserInfoWrap = styled.div`
  width: 60px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderUserInfo = () => {
  const [willBeShown, setWillBeShown] = useState(false);

  return (
    <>
      <HeaderUserInfoWrap>
        {/* 서버 연결 후 로그인 ID로 바꾸기 */}

        <HeaderUserInfoIcon
          willBeShown={willBeShown}
          setWillBeShown={setWillBeShown}
        />
      </HeaderUserInfoWrap>
      <HeaderUserInfoDetails willBeShown={willBeShown} />
    </>
  );
};

export default HeaderUserInfo;
