import React, { useState } from "react";
import styled from "styled-components";
import UserIcon from "../../../../../contentsComponent/videoBox/videoSummary/videoExplanaion/videoExplanaionDetails/UserIcon";

const HiddenMenuSubscriptionWrap = styled.div`
  min-height: 371px;
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px hsl(0, 0%, 80%);
  .min {
    max-height: 280px;
  }
  .full {
    overflow-y: visible;
    height: auto;
  }
`;

const TitleWrap = styled.div`
  height: 40px;
  padding: 8px 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  color: hsl(0, 0%, 50%);
`;

const ItemsWrap = styled.div`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;

const ItemBar = styled.div`
  height: 40px;
  padding: 0px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    height: 40px;
    img {
      width: 24px;
      height: 24px;
    }
  }
  div:first-child {
    height: 24px;
    width: 24px;
    font-size: 12px;
    margin: 0 8px 0 0;
  }
  .seeMore {
    padding: 0px 12px;
  }
  :hover {
    cursor: pointer;
    background-color: hsl(0, 0%, 90%);
  }
  :active {
    background-color: hsl(0, 0%, 70%);
  }
`;

const TextBar = styled.div`
  width: 144px;
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
`;

const ArrowWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HiddenMenuSubscription = () => {
  const [fullHeight, setFullHeight] = useState("min");

  const onClickMore = (e) => {
    if (fullHeight === "full") {
      setFullHeight("min");
    } else {
      setFullHeight("full");
    }
    console.log(fullHeight);
  };
  return (
    <HiddenMenuSubscriptionWrap>
      <TitleWrap>구독</TitleWrap>
      <ItemsWrap className={fullHeight}>
        <ItemBar>
          <UserIcon></UserIcon>
          <TextBar>규튜브</TextBar>
        </ItemBar>
        <ItemBar>
          <UserIcon></UserIcon>
          <TextBar>규튜브다맨이야</TextBar>
        </ItemBar>
        <ItemBar>
          <UserIcon></UserIcon>
          <TextBar>너무길면뒤에잘라</TextBar>
        </ItemBar>
        <ItemBar>
          <UserIcon></UserIcon>
          <TextBar>몇글자까지살려야하나</TextBar>
        </ItemBar>
        <ItemBar>
          <UserIcon></UserIcon>
          <TextBar>요위까지ㄱㅊ</TextBar>
        </ItemBar>
        <ItemBar>
          <UserIcon></UserIcon>
          <TextBar>귀찮당</TextBar>
        </ItemBar>
        <ItemBar>
          <UserIcon></UserIcon>
          <TextBar>리액트넘얼여워용</TextBar>
        </ItemBar>
        <ItemBar>
          <UserIcon></UserIcon>
          <TextBar>히히!</TextBar>
        </ItemBar>
        <ItemBar>
          <UserIcon></UserIcon>
          <TextBar>너는숨겨질것이야</TextBar>
        </ItemBar>
      </ItemsWrap>
      <ItemBar onClick={onClickMore} className="seeMore">
        <ArrowWrap className="globalIconBtnRect">
          <i className="fas fa-chevron-down"></i>
        </ArrowWrap>
        <TextBar>100개 더보기</TextBar>
      </ItemBar>
    </HiddenMenuSubscriptionWrap>
  );
};

export default HiddenMenuSubscription;
