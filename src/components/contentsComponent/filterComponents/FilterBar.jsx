import React from "react";
import styled from "styled-components";
import FilterBtns from "./filterBtns/FilterBtns";

const FilterBarWrap = styled.div`
  width: 92vw;
  height: 56px;
  position: fixed;
  top: 0;
  left: 72px;
  margin-top: 56px;
  border-top: solid 1px hsl(0, 0%, 80%);
  border-bottom: solid 1px hsl(0, 0%, 80%);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  overflow: hidden;
  .first {
    margin: 12px 12px 12px 24px;
  }
`;

const FilterBar = () => {
  return (
    <FilterBarWrap>
      <FilterBtns></FilterBtns>
    </FilterBarWrap>
  );
};

export default FilterBar;
