import React from "react";
import styled from "styled-components";

const HeaderUserInfoDetailsAccountWrap = styled.div`
  width: 100%;
  height: 217px;
  padding: 8px 0;
  border-bottom: 1px solid hsl(0, 0%, 80%);
  background-color: white;
`;

const HeaderUserInfoDetailsAccount = () => {
  return (
    <HeaderUserInfoDetailsAccountWrap className="globalItemsWrap">
      <div className="globalItemBar">
        <div className="globalIconBtn globalIconWrap">
          <i className="fas fa-user-circle"></i>
        </div>
        <div className="globalTextBar">내 채널</div>
      </div>
      <div className="globalItemBar">
        <div className="globalIconBtn globalIconWrap">
          <i className="fas fa-dollar-sign"></i>
        </div>
        <div className="globalTextBar">구매 항목 및 멤버십</div>
      </div>
      <div className="globalItemBar">
        <div className="globalIconBtn globalIconWrap">
          <i className="fas fa-cog"></i>
        </div>
        <div className="globalTextBar">GyuTube 스튜디오</div>
      </div>
      <div className="globalItemBar  with_arrow">
        <div className="globalIconBtn globalIconWrap">
          <i className="fas fa-sync-alt"></i>
        </div>
        <div className="globalTextBar">계정 전환</div>
        <div className="arrow">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className="globalItemBar">
        <div className="globalIconBtn globalIconWrap">
          <i className="fas fa-external-link-alt"></i>
        </div>
        <div className="globalTextBar">로그아웃</div>
      </div>
    </HeaderUserInfoDetailsAccountWrap>
  );
};

export default HeaderUserInfoDetailsAccount;
