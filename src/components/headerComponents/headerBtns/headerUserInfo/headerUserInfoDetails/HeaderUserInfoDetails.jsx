import React from "react";
import styled from "styled-components";
import HeaderUserInfoDetailsAccount from "./headerUserInfoDetailsAccount/HeaderUserInfoDetailsAccount";
import HeaderUserInfoDetailsHeader from "./headerUserInfoDetailsHeader/HeaderUserInfoDetailsHeader";
import HeaderUserInfoDetailsMode from "./headerUserInfoDetailsMode/HeaderUserInfoDetailsMode";
import HeaderUserInfoDetailsSettings from "./headerUserInfoDetailsSettings/HeaderUserInfoDetailsSettings";

const HeaderUserInfoDetailsWrap = styled.div`
  width: 300px;
  height: 694px;
  border: 1px solid hsl(0, 0%, 80%);
  position: absolute;
  top: 56px;
  /* right 위치 조정 필요함 */
  right: 40px;
  .bigger__icon {
    width: calc(40px - 0px);
    height: calc(40px - 2px);
    padding-bottom: 4px;
    :hover {
      cursor: unset;
    }
    :active {
      transform: none;
    }
  }
  .globalItemBar {
    padding: 0 36px 0 16px;
  }
  .with_arrow {
    padding-right: 20px;
  }
  .globalIconBtn {
    font-size: 22px;
    margin-right: 16px;
  }
  .globalIconBtn:active {
    background-color: var(--active-bg-color);
  }
  .globalTextBar {
    width: 206px;
    font-size: 14px;
  }
  .arrow {
    font-size: 18px;
    color: hsl(0, 0%, 38%);
  }
  .mode {
    margin-right: 56px;
  }
`;

const HeaderUserInfoDetailsItemsWrap = styled.div`
  max-height: 611px;
  height: calc(100vh - 56px - 83px);
  overflow-y: scroll;
`;

const HeaderUserInfoDetails = ({ willBeShown }) => {
  return (
    <HeaderUserInfoDetailsWrap
      className={willBeShown ? "display__on" : "display__off"}
    >
      <HeaderUserInfoDetailsHeader />
      <HeaderUserInfoDetailsItemsWrap>
        <HeaderUserInfoDetailsAccount />
        <HeaderUserInfoDetailsSettings />
        <HeaderUserInfoDetailsMode />
      </HeaderUserInfoDetailsItemsWrap>
    </HeaderUserInfoDetailsWrap>
  );
};

export default HeaderUserInfoDetails;
