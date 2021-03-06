import React, { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderLogoWrap = styled.div`
  width: 129px;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  .fa-youtube {
    font-size: 28px;
    color: hsl(0, 100%, 50%);
    margin-right: 2px;
  }
  .gyutube {
    font-weight: 700;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    letter-spacing: -2.5px;
    color: hsl(0, 0%, 13%);
  }
  .sup {
    font-weight: 400;
    font-size: 8px;
    color: hsl(0, 0%, 52%);
    letter-spacing: 0;
    position: relative;
    top: -4px;
    left: 4px;
  }
  a {
    width: auto;
  }
`;

const HeaderLogoMainLogo = memo(({ setSearchedByKeyword = () => {} }) => {
  const onClickLogo = () => {
    setSearchedByKeyword([]);
  };
  return (
    <HeaderLogoWrap onClick={onClickLogo}>
      <Link to="/" className="gyutube">
        <i className="fab fa-youtube"></i>
      </Link>
      <Link to="/" className="gyutube">
        GyuTube<sup className="sup">KR</sup>
      </Link>
    </HeaderLogoWrap>
  );
});

export default HeaderLogoMainLogo;
