import React, { useState } from "react";
import styled from "styled-components";
import UserData from "../../../../DB/UserData.json";

const ShowCase = styled.div`
  width: calc(100% -100px);
  overflow-x: hidden;
  z-index: -1;
  mask: linear-gradient(to right, black 95%, transparent);
`;

const BtnsWrap = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  position: relative;
  left: 0;
  transition-duration: 0.2s;
  transform: translateX(${(props) => props.moveX * 10 + "%"});
`;

const StyledBtn = styled.button`
  margin: 12px;
  padding: 0 12px;
  height: 32px;
  border: solid 1px hsl(0, 0%, 80%);
  border-radius: 16px;
  min-width: 52.67px;
  flex-shrink: 0;
  :hover {
    cursor: pointer;
    background-color: var(--default-bg-color);
  }
  :active {
    transition-duration: 0.2s;
  }
`;

const FilterBtns = ({ moveX = 0, setCheckTheme = () => {} }) => {
  const [selectedBtn, setSelectedBtn] = useState("전체");
  // console.log(UserData.users[0].preferredTheme);
  const preferredThemes = [...UserData.users[0].preferredTheme];
  // console.log(preferredThemes);
  const onClickBtn = (e) => {
    const btnValue = e.target.innerText;
    // console.log(setCheckTheme);
    // console.log(btnValue);
    setCheckTheme(btnValue);
    setSelectedBtn(btnValue);
  };

  return (
    <ShowCase>
      <BtnsWrap moveX={moveX}>
        <StyledBtn
          className={`first ${selectedBtn === "전체" ? "selected_btn" : null}`}
          onClick={onClickBtn}
        >
          전체
        </StyledBtn>
        {preferredThemes.map((preferredTheme) => {
          return (
            <StyledBtn
              className={preferredTheme === selectedBtn ? "selected_btn" : null}
              onClick={onClickBtn}
            >
              {preferredTheme}
            </StyledBtn>
          );
        })}
        <StyledBtn
          className={
            selectedBtn === "최근에 업로드된 동영상" ? "selected_btn" : null
          }
          onClick={onClickBtn}
        >
          최근에 업로드된 동영상
        </StyledBtn>
        <StyledBtn
          className={selectedBtn === "감상한 동영상" ? "selected_btn" : null}
          onClick={onClickBtn}
        >
          감상한 동영상
        </StyledBtn>
      </BtnsWrap>
    </ShowCase>
  );
};

export default FilterBtns;
