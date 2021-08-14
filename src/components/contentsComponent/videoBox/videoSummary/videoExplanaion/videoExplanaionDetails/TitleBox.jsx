import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TitleBoxWrap = styled.div`
  overflow: hidden;
  padding-right: 24px;
  h3 {
    height: 40px;
    margin: 12px 0 4px 0;
    font-size: 14px;
    font-weight: normal;
    color: black;
  }
  div {
    /* div 나눠서 부모만 height: 36px */
    font-size: 13px;
    color: hsl(0, 0%, 38%);
  }
`;

const TitleBox = () => {
  return (
    <Link to="/playing">
      <TitleBoxWrap>
        <h3>대신 커여운 고양이를 드리겠읍니다.</h3>
        <div>
          <div>희망이 넘치는 페페</div>
          <div>조회수 105만회・20년 전</div>
        </div>
      </TitleBoxWrap>
    </Link>
  );
};

export default TitleBox;
