import React, { useState, useRef } from "react";
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
  .selected_filter,
  .selected_filter:hover {
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
let time = 0;

const FilterBar = ({ setCheckTheme = () => {} }) => {
  const filterBarRef = useRef();
  // console.log(setCheckTheme);

  const onClickLeftArrow = () => {
    console.log(filterBarRef.current.className);
    const filterBarStyle = filterBarRef.current.style;
    if (time === 2) {
      filterBarStyle.setProperty("transform", "translateX(0)");
    } else if (time === 4) {
      filterBarStyle.setProperty("transform", "translateX(-20%)");
      time = 2;
    } else if (time === 6) {
      filterBarStyle.setProperty("transform", "translateX(-40%)");
      time = 4;
    } else if (time === 8) {
      filterBarStyle.setProperty("transform", "translateX(-60%)");
      time = 6;
    }
    console.log(time);
  };

  const onClickRightArrow = () => {
    // console.log(filterBarRef.current.className);
    const filterBarStyle = filterBarRef.current.style;
    if (time === 0) {
      filterBarStyle.setProperty("transform", "translateX(-20%)");
      time = 2;
    } else if (time === 2) {
      filterBarStyle.setProperty("transform", "translateX(-40%)");
      time = 4;
    } else if (time === 4) {
      filterBarStyle.setProperty("transform", "translateX(-60%)");
      time = 6;
    } else if (time === 6) {
      filterBarStyle.setProperty("transform", "translateX(-80%)");
      time = 8;
    }
    // console.log(time);
  };

  return (
    <FilterBarWrap>
      <ArrowWrap onClick={onClickLeftArrow}>
        <div className="globalIconBtn">
          <i className="fas fa-chevron-left"></i>
        </div>
      </ArrowWrap>
      <FilterBtns setCheckTheme={setCheckTheme} ref={filterBarRef} />
      <ArrowWrap onClick={onClickRightArrow}>
        <div className="globalIconBtn">
          <i className="fas fa-chevron-right"></i>
        </div>
      </ArrowWrap>
    </FilterBarWrap>
  );
};

export default FilterBar;
