import React, { useState, memo } from "react";
import styled from "styled-components";
import UserIcon from "../../../../../contentsComponent/videoBox/videoSummary/videoExplanaion/videoExplanaionDetails/UserIcon";
// import UserData from "../../../../../../DB/UserData.json";

const HiddenMenuSubscriptionWrap = styled.div`
  min-height: 371px;
  padding: 12px 0;
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
  padding: 8px 12px 8px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  color: hsl(0, 0%, 40%);
`;

const ItemsWrap = styled.div`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;

const ItemBar = styled.div`
  height: 40px;
  padding: 0px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    height: 40px;
    img {
      width: 24px;
      height: 24px;
    }
    color: black;
  }
  div:first-child {
    height: 24px;
    width: 24px;
    font-size: 12px;
    margin: 0 16px 0 2px;
  }
  .moreOrLess {
    padding: 0px 12px;
  }
  :hover {
    cursor: pointer;
    background-color: var(--hover-bg-color);
  }
  :active {
    background-color: var(--active-bg-color);
  }
`;

const TextBar = styled.div`
  width: 144px;
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ArrowWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HiddenMenuSubscription = memo(
  ({ isSelected = "Home", setIsSelected = () => {} }) => {
    const [fullHeight, setFullHeight] = useState("min");
    const [showMore, setShowMore] = useState(false);

    // const subscriptions = [...UserData.users[0].subscription];
    // console.log(subscriptions);

    const onClickMore = () => {
      if (fullHeight === "full") {
        setFullHeight("min");
      } else {
        setFullHeight("full");
      }
      // console.log(fullHeight);
      setShowMore(!showMore);
    };
    return (
      <HiddenMenuSubscriptionWrap>
        <TitleWrap>구독</TitleWrap>
        <ItemsWrap className={fullHeight}>
          {/* 여기는 데이터를 받아와서 선택되어야 하므로.. 잠시 대기 */}
          <ItemBar className={isSelected === "Gyutube" ? "selected" : null}>
            <UserIcon />
            <TextBar>승우엄마</TextBar>
          </ItemBar>
          <ItemBar>
            <UserIcon />
            <TextBar>침착우먼</TextBar>
          </ItemBar>
          <ItemBar>
            <UserIcon />
            <TextBar>ChaseDownWNBA</TextBar>
          </ItemBar>
          <ItemBar>
            <UserIcon />
            <TextBar>드럼코딩</TextBar>
          </ItemBar>
          <ItemBar>
            <UserIcon />
            <TextBar>코마드 노더</TextBar>
          </ItemBar>
          <ItemBar>
            <UserIcon />
            <TextBar>일상생활코딩</TextBar>
          </ItemBar>
          <ItemBar>
            <UserIcon />
            <TextBar>Offline Tutorials</TextBar>
          </ItemBar>
          <ItemBar>
            <UserIcon />
            <TextBar>싸이콜로지컬갤러리</TextBar>
          </ItemBar>
          <ItemBar>
            <UserIcon />
            <TextBar>너는숨겨질것이야</TextBar>
          </ItemBar>
        </ItemsWrap>
        <ItemBar onClick={onClickMore} className="moreOrLess">
          <ArrowWrap className="globalIconBtnRect">
            <i
              className={showMore ? "fas fa-chevron-up" : "fas fa-chevron-down"}
            ></i>
          </ArrowWrap>
          <TextBar>{showMore ? "간략히 보기" : "100개 더보기"}</TextBar>
        </ItemBar>
      </HiddenMenuSubscriptionWrap>
    );
  }
);

export default HiddenMenuSubscription;
