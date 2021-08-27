import React, { useState } from "react";
import styled from "styled-components";
import HeaderUserInfoIcon from "../../HeaderUserInfoIcon";

const HeaderUserInfoDetailsHeaderWrap = styled.div`
  width: 298px;
  height: 83px;
  padding: 16px;
  border-bottom: 1px solid hsl(0, 0%, 80%);
  display: flex;
  background-color: white;
`;

const ManagingAccountBox = styled.div`
  margin-left: 16px;
`;

const UserNameBox = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;
const UserAccount = styled.a`
  font-size: 14px;
  color: hsl(214, 71%, 66%);
  :hover {
    cursor: pointer;
  }
`;

const HeaderUserInfoDetailsHeader = () => {
  const [willBeShown, setWillBeShown] = useState(false);

  return (
    <HeaderUserInfoDetailsHeaderWrap>
      <HeaderUserInfoIcon
        willBeShown={willBeShown}
        setWillBeShown={setWillBeShown}
      />
      <ManagingAccountBox>
        <UserNameBox>김승규</UserNameBox>
        <UserAccount>Gyugle 계정 관리</UserAccount>
      </ManagingAccountBox>
    </HeaderUserInfoDetailsHeaderWrap>
  );
};

export default HeaderUserInfoDetailsHeader;
