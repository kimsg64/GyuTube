import React from "react";
import NavigatorHome from "../../../../../navigatorComponents/navigatorHome/NavigatorHome";
import NavigatorCompass from "../../../../../navigatorComponents/navigatorCompass/NavigatorCompass";
import NavigatorSubscription from "../../../../../navigatorComponents/navigatorSubscription/NavigatorSubscription";
import styled from "styled-components";

const HiddenMenuHomeWrap = styled.div`
  border-bottom: solid 1px hsl(0, 0%, 80%);
  padding: 12px 0;
`;

// const ItemBar = styled.div`
//   height: 40px;
//   padding: 0 20px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   .text {
//     display: none;
//   }
//   :hover {
//     cursor: pointer;
//     background-color: var(--hover-bg-color);
//   }
//   :hover .selected,
//   :hover .fas {
//     background-color: var(--hover-bg-color);
//   }
//   :active {
//     background-color: var(--active-bg-color);
//   }
//   :active .selected,
//   :active .fas {
//     background-color: var(--active-bg-color);
//   }
// `;

// const TextBar = styled.div`
//   width: 144px;
//   height: 20px;
//   display: flex;
//   align-items: center;
//   font-size: 14px;
//   font-weight: 400;
// `;

// const IconWrap = styled.div`
//   width: 30px;
//   margin-right: 18px;
//   div {
//     height: 40px;
//   }
// `;

const HiddenMenuHome = ({ isSelected = "Home", setIsSelected = () => {} }) => {
  const onClickHome = () => {
    setIsSelected("Home");
  };
  const onClickSearch = () => {
    setIsSelected("Search");
  };
  const onClickMySubscription = () => {
    setIsSelected("MySubscription");
  };
  return (
    <HiddenMenuHomeWrap>
      <div
        className={`${isSelected === "Home" ? "selected" : null} globalItemBar`}
        onClick={onClickHome}
      >
        <div className="globalIconBtnRect globalIconWrap">
          <i className="fas fa-home"></i>
        </div>
        <div className="globalTextBar">홈</div>
      </div>
      <div
        className={`${
          isSelected === "Search" ? "selected" : null
        } globalItemBar`}
        onClick={onClickSearch}
      >
        <div className="globalIconBtnRect globalIconWrap">
          <i className="fas fa-compass"></i>
        </div>
        <div className="globalTextBar">탐색</div>
      </div>
      <div
        className={`${
          isSelected === "MySubscription" ? "selected" : null
        } globalItemBar`}
        onClick={onClickMySubscription}
      >
        <div className="globalIconBtnRect globalIconWrap">
          <i className="fas fa-layer-group"></i>
        </div>
        <div className="globalTextBar">구독</div>
      </div>
    </HiddenMenuHomeWrap>
  );
};

export default HiddenMenuHome;
