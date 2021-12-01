import React, { memo } from "react";
import styled from "styled-components";

const MenuBoxWrap = styled.div`
  /* margin-top: 12px; */
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-top: 12px; */
  border-radius: 100%;
  .fa-ellipsis-v {
    display: none;
  }
`;

const MenuBox = memo(() => {
  return (
    <MenuBoxWrap className="globalIconBtn">
      <i className="fas fa-ellipsis-v"></i>
    </MenuBoxWrap>
  );
});

export default MenuBox;
