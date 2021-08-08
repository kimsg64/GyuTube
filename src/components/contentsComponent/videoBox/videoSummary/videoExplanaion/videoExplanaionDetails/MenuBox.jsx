import React from "react";
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
  background-color: beige;
  .fa-ellipsis-v {
    display: none;
  }
`;

const MenuBox = () => {
  return (
    <MenuBoxWrap>
      <i class="fas fa-ellipsis-v"></i>
    </MenuBoxWrap>
  );
};

export default MenuBox;
