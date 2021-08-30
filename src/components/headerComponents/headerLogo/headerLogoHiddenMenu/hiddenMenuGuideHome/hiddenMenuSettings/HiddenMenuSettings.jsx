import React from "react";
import styled from "styled-components";

const HiddenMenuSettingsWrap = styled.div`
  height: 176px;
  border-bottom: solid 1px hsl(0, 0%, 80%);
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* .fab {
    font-size: 18px;
    color: hsl(0, 0%, 38%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .fab:hover {
    transform: scale(1.1);
    cursor: pointer;
  } */
`;

// const ItemsWrap = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const ItemBar = styled.div`
//   height: 40px;
//   padding: 0 20px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   :hover {
//     cursor: pointer;
//     background-color: var(--hover-bg-color);
//   }
//   :active {
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
//   height: 30px;
//   margin-right: 18px;
// `;

const HiddenMenuSettings = ({
  isSelected = "Home",
  setIsSelected = () => {},
}) => {
  const onClickSettings = () => {
    setIsSelected("Settings");
  };
  const onClickReport = () => {
    setIsSelected("Report");
  };
  const onClickCustomerCenter = () => {
    setIsSelected("CustomerCenter");
  };
  const onClickOpinion = () => {
    setIsSelected("Opinion");
  };
  return (
    <HiddenMenuSettingsWrap>
      <div className="globalItemsWrap">
        <div
          className={`${
            isSelected === "Settings" ? "selected" : null
          } globalItemBar`}
          onClick={onClickSettings}
        >
          <div className="globalIconBtnRect globalIconWrap">
            <i className="fas fa-cog"></i>
          </div>
          <div className="globalTextBar">설정</div>
        </div>
        <div
          className={`${
            isSelected === "Report" ? "selected" : null
          } globalItemBar`}
          onClick={onClickReport}
        >
          <div className="globalIconBtnRect globalIconWrap">
            <i className="fas fa-flag"></i>
          </div>
          <div className="globalTextBar">신고 기록</div>
        </div>
        <div
          className={`${
            isSelected === "CustomerCenter" ? "selected" : null
          } globalItemBar`}
          onClick={onClickCustomerCenter}
        >
          <div className="globalIconBtnRect globalIconWrap">
            <i className="fas fa-question-circle"></i>
          </div>
          <div className="globalTextBar">고객센터</div>
        </div>
        <div
          className={`${
            isSelected === "Opinion" ? "selected" : null
          } globalItemBar`}
          onClick={onClickOpinion}
        >
          <div className="globalIconBtnRect globalIconWrap">
            <i className="fas fa-comment-alt"></i>
          </div>
          <div className="globalTextBar">의견 보내기</div>
        </div>
      </div>
    </HiddenMenuSettingsWrap>
  );
};

export default HiddenMenuSettings;
