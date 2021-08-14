import React from "react";
import styled from "styled-components";
import NavigatorStorageWrap from "../../../../../navigatorComponents/navigatorStorage/NavigatorStorage";

const HiddenMenuPreferenceWrap = styled.div`
  height: 223px;
  border-bottom: solid 1px hsl(0, 0%, 80%);
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ItemBar = styled.div`
  height: 40px;
  padding: 0 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    height: 40px;
    margin-right: 24px;
  }
  .text {
    display: none;
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
  font-size: 12px;
  font-weight: 400;
`;

const IconWrap = styled.div`
  width: inherit;
  height: 74px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    margin-top: 6px;
    font-size: 10px;
  }
`;

const HiddenMenuPreference = () => {
  return (
    <HiddenMenuPreferenceWrap>
      <ItemBar>
        <NavigatorStorageWrap></NavigatorStorageWrap>
        <TextBar>보관함</TextBar>
      </ItemBar>
      <ItemBar>
        <IconWrap>
          <i class="fas fa-history"></i>
        </IconWrap>
        <TextBar>시청 기록</TextBar>
      </ItemBar>
      <ItemBar>
        <IconWrap>
          <i class="far fa-play-circle"></i>
        </IconWrap>
        <TextBar>내 동영상</TextBar>
      </ItemBar>
      <ItemBar>
        <IconWrap>
          <i class="fas fa-clock"></i>
        </IconWrap>
        <TextBar>나중에 볼 동영상</TextBar>
      </ItemBar>
      <ItemBar>
        <IconWrap>
          <i class="fas fa-thumbs-up"></i>
        </IconWrap>
        <TextBar>좋아요 표시한 동영상</TextBar>
      </ItemBar>
    </HiddenMenuPreferenceWrap>
  );
};

export default HiddenMenuPreference;
