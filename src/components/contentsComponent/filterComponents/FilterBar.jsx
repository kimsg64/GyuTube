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
  justify-content: flex-start;
`;

const FilterBar = () => {
  return (
    <FilterBarWrap>
      <FilterBtns></FilterBtns>
    </FilterBarWrap>
  );
};

export default FilterBar;
