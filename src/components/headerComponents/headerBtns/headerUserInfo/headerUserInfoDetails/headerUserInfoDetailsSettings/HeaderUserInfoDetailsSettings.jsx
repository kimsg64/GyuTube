import React, { useState } from "react";
import styled from "styled-components";

const HeaderUserInfoSettingsWrap = styled.div`
  width: 100%;
  height: 337px;
  padding: 8px 0;
  border-bottom: 1px solid hsl(0, 0%, 80%);
  background-color: white;
`;

const HeaderUserInfoDetailsSettings = () => {
  const [isDark, setIsDark] = useState(false);
  const [clickDesign, setClickDesign] = useState(false);
  const handleTheme = () => {
    setClickDesign(!clickDesign);
  };
  return (
    <HeaderUserInfoSettingsWrap>
      <div className="globalItemBar with_arrow">
        <div className="globalIconBtn globalIconWrap">
          <i className="far fa-moon"></i>
        </div>
        <div className="globalTextBar" onClick={handleTheme}>
          디자인: {isDark ? "어두운" : "밝은"} 테마
        </div>
        <div className="arrow">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className="globalItemBar with_arrow">
        <div className="globalIconBtn globalIconWrap">
          <i className="fas fa-language"></i>
        </div>
        <div className="globalTextBar">언어: 한국어</div>
        <div className="arrow">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className="globalItemBar with_arrow">
        <div className="globalIconBtn globalIconWrap">
          <i className="fas fa-globe"></i>
        </div>
        <div className="globalTextBar">위치: 한국</div>
        <div className="arrow">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className="globalItemBar">
        <div className="globalIconBtn globalIconWrap">
          <i className="fas fa-cog"></i>
        </div>
        <div className="globalTextBar">설정</div>
      </div>
      <div className="globalItemBar">
        <div className="globalIconBtn globalIconWrap">
          <i className="fas fa-user-shield"></i>
        </div>
        <div className="globalTextBar">GyuTube의 내 데이터</div>
      </div>
      <div className="globalItemBar">
        <div className="globalIconBtn globalIconWrap">
          <i className="far fa-question-circle"></i>
        </div>
        <div className="globalTextBar">고객센터</div>
      </div>
      <div className="globalItemBar">
        <div className="globalIconBtn globalIconWrap">
          <i className="fas fa-exclamation"></i>
        </div>
        <div className="globalTextBar">의견 보내기</div>
      </div>
      <div className="globalItemBar">
        <div className="globalIconBtn globalIconWrap">
          <i className="far fa-keyboard"></i>
        </div>
        <div className="globalTextBar">단축키</div>
      </div>
    </HeaderUserInfoSettingsWrap>
  );
};

export default HeaderUserInfoDetailsSettings;
