import React from "react";
import styled from "styled-components";

const UserIconWrap = styled.div`
  height: 36px;
  width: 36px;
  flex-shrink: 0;
  margin: 12px 12px 0 0;
  border-radius: 100%;
  overflow: hidden;
  img {
    height: 36px;
    width: 36px;
  }
`;

const UserIcon = () => {
  return (
    <UserIconWrap>
      <img src="/images/Hope.png" alt="FACE" />
    </UserIconWrap>
  );
};

export default UserIcon;
