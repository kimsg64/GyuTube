import React from "react";
import styled from "styled-components";

const HiddenMenuPreferenceWrap = styled.div`
  height: 223px;
  border-bottom: solid 1px hsl(0, 0%, 80%);
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-right: 18px;
// `;

const HiddenMenuPreference = ({
  isSelected = "Home",
  setIsSelected = () => {},
}) => {
  const onClickStorage = () => {
    setIsSelected("Storage");
  };
  const onClickRecord = () => {
    setIsSelected("Record");
  };
  const onClickMyVideo = () => {
    setIsSelected("MyVideo");
  };
  const onClickKeepVideo = () => {
    setIsSelected("KeepVideo");
  };
  const onClickThumbsUpVideo = () => {
    setIsSelected("ThumbsUpVideo");
  };
  return (
    <HiddenMenuPreferenceWrap>
      <div
        className={`${
          isSelected === "Storage" ? "selected" : null
        } globalItemBar`}
        onClick={onClickStorage}
      >
        <div className="globalIconBtnRect globalIconWrap">
          <i className="fas fa-clone"></i>
        </div>
        <div className="globalTextBar">보관함</div>
      </div>
      <div
        className={`${
          isSelected === "Record" ? "selected" : null
        } globalItemBar`}
        onClick={onClickRecord}
      >
        <div className="globalIconBtnRect globalIconWrap">
          <i className="fas fa-history"></i>
        </div>
        <div className="globalTextBar">시청 기록</div>
      </div>
      <div
        className={`${
          isSelected === "MyVideo" ? "selected" : null
        } globalItemBar`}
        onClick={onClickMyVideo}
      >
        <div className="globalIconBtnRect globalIconWrap">
          <i className="far fa-play-circle"></i>
        </div>
        <div className="globalTextBar">내 동영상</div>
      </div>
      <div
        className={`${
          isSelected === "KeepVideo" ? "selected" : null
        } globalItemBar`}
        onClick={onClickKeepVideo}
      >
        <div className="globalIconBtnRect globalIconWrap">
          <i className="fas fa-clock"></i>
        </div>
        <div className="globalTextBar">나중에 볼 동영상</div>
      </div>
      <div
        className={`${
          isSelected === "ThumbsUpVideo" ? "selected" : null
        } globalItemBar`}
        onClick={onClickThumbsUpVideo}
      >
        <div className="globalIconBtnRect globalIconWrap">
          <i className="fas fa-thumbs-up"></i>
        </div>
        <div className="globalTextBar">좋아요 표시한 동영상</div>
      </div>
    </HiddenMenuPreferenceWrap>
  );
};

export default HiddenMenuPreference;
