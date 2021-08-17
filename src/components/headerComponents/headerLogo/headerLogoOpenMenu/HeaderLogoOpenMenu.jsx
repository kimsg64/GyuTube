import React, { useState } from "react";
import styled from "styled-components";

// 글로벌 스타일을 부여해서 삭제 가능
// const HeaderLogoOpenMenuWrap = styled.div`
//   width: 40px;
//   height: 40px;
//   display: flex;
//   border-radius: 100%;
//   justify-content: center;
//   align-items: center;
// `;

const HeaderLogoOpenMenu = ({ willBeShown, setWillBeShown }) => {
  const onClickLogo = () => {
    // willBeShown ? setWillBeShown(false) : setWillBeShown(true);
    // 똑같음
    setWillBeShown(!willBeShown);
  };

  return (
    <div className="globalIconBtn" onClick={onClickLogo}>
      <i className="fas fa-bars"></i>
    </div>
  );
};

export default HeaderLogoOpenMenu;
