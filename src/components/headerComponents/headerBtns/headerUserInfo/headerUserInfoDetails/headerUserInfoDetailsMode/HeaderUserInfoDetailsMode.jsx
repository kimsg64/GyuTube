import React from "react";
import styled from "styled-components";

const HeaderUserInfoDetailsModeWrap = styled.div`
  width: 100%;
  height: 56px;
  padding: 8px 0;
  background-color: white;
  border-bottom: 1px solid hsl(0, 0%, 80%);
`;

const HeaderUserInfoDetailsMode = () => {
  return (
    <HeaderUserInfoDetailsModeWrap>
      <div className="globalItemBar with_arrow">
        <div className="globalTextBar mode">제한 모드: 사용 안함</div>
        <div className="arrow">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </HeaderUserInfoDetailsModeWrap>
  );
};

export default HeaderUserInfoDetailsMode;
