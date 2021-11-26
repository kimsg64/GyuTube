import React, { useState } from "react";
import styled from "styled-components";
import FilterBtns from "./filterBtns/FilterBtns";

const FilterBarWrap = styled.div`
  width: inherit;
  height: 56px;
  position: fixed;
  top: 0;
  left: 72px;
  margin-top: 56px;
  border-top: solid 1px hsl(0, 0%, 80%);
  border-bottom: solid 1px hsl(0, 0%, 80%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  overflow: hidden;
  box-sizing: border-box;

  .first {
    margin: 12px 12px 12px 24px;
  }
  .selected_btn,
  .selected_btn:hover {
    background-color: black;
    color: white;
  }
`;

const ArrowWrap = styled.div`
  height: 56px;
  width: 56px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  .fas {
    font-size: 10px;
  }
  div {
    height: 36px;
    width: 36px;
  }
`;

const FilterBar = ({ setCheckTheme = () => {} }) => {
  const [moveX, setMoveX] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(0);
  // console.log("moveX: ", moveX);
  // console.log("currentWidth: ", currentWidth);

  const onClickLeftArrow = () => {
    setMoveX((prevMoveX) => {
      return prevMoveX === 0 ? prevMoveX : prevMoveX + 1;
    });
  };

  const onClickRightArrow = () => {
    setMoveX((prevMoveX) => {
      // console.log("prevMoveX: ", prevMoveX);
      // 바의 총 너비는 1720px이므로... 그 안에서만 움직이게 하기
      return prevMoveX < -3 ? prevMoveX : prevMoveX - 1;
    });
  };

  return (
    <FilterBarWrap>
      <ArrowWrap onClick={onClickLeftArrow}>
        <div className="globalIconBtn">
          <i className="fas fa-chevron-left"></i>
        </div>
      </ArrowWrap>
      <FilterBtns
        setCheckTheme={setCheckTheme}
        moveX={moveX}
        setCurrentWidth={setCurrentWidth}
      />
      <ArrowWrap onClick={onClickRightArrow}>
        <div className="globalIconBtn">
          <i className="fas fa-chevron-right"></i>
        </div>
      </ArrowWrap>
    </FilterBarWrap>
  );
};

export default FilterBar;
