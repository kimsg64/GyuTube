import React from "react";
import styled from "styled-components";

const HiddenMenuCopyRightWrap = styled.div`
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ItemsWrap = styled.div`
  display: flex;
  flex-direction: column;
  .copyright {
    font-size: 11px;
    line-height: 1.7;
    color: hsl(0, 0%, 60%);
  }
`;

const ItemBar = styled.div`
  padding: 6px 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  div {
    height: 40px;
    margin-right: 24px;
  }
`;

const TextBar = styled.a`
  margin-right: 8px;
  font-size: 13px;
`;

const HiddenMenuCopyRight = () => {
  return (
    <HiddenMenuCopyRightWrap>
      <ItemsWrap>
        <ItemBar>
          <TextBar href="">정보</TextBar>
          <TextBar href="">보도자료</TextBar>
          <TextBar href="">저작권</TextBar>
          <TextBar href="">문의하기</TextBar>
          <TextBar href="">크리에이터</TextBar>
          <TextBar href="">광고</TextBar>
          <TextBar href="">개발자</TextBar>
        </ItemBar>
        <ItemBar>
          <TextBar href="">약관</TextBar>
          <TextBar href="">개인정보처리방침</TextBar>
          <TextBar href="">정책 및 안전</TextBar>
          <TextBar href="">Gyutube 작동의 원리</TextBar>
          <TextBar href="">새로운 기능 테스트하기</TextBar>
        </ItemBar>
        <ItemBar className="copyright">
          © 2021 Gyugle LLC <br />
          CEO: 승규 킴 <br />
          주소: 전라남도 여수시 미평동 귀인촌 301호 <br />
          전화: 061-653-5634(무료)
        </ItemBar>
      </ItemsWrap>
    </HiddenMenuCopyRightWrap>
  );
};

export default HiddenMenuCopyRight;
