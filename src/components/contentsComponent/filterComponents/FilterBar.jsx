import React from "react";
import styled from "styled-components";
import FilterBtns from "./filterBtns/FilterBtns";

const FilterBarWrap = styled.div`
  width: 100%;
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
`;

const ArrowWrap = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .fas {
    font-size: 10px;
  }
  :active {
    background-color: hsl(0, 0%, 80%);
  }
`;

const FilterBar = () => {
  return (
    <FilterBarWrap>
      <ArrowWrap className="globalIconBtnRect">
        <i className="fas fa-chevron-left"></i>
      </ArrowWrap>
      <FilterBtns></FilterBtns>
      <ArrowWrap className="globalIconBtnRect">
        <i className="fas fa-chevron-right"></i>
      </ArrowWrap>
    </FilterBarWrap>
  );
};

export default FilterBar;
