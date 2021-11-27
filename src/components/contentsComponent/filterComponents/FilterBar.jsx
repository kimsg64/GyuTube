import React, { useState, useRef, useEffect } from "react";
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
  @media ${(props) => props.theme.mobile} {
    left: 0;
  }
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
  const [barWidth, setBarWidth] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    if (barRef !== null) {
      setBarWidth(barRef.current.offsetWidth);
    }
  }, []);

  const onClickLeftArrow = () => {
    setMoveX((prevMoveX) => {
      return prevMoveX === 0 ? prevMoveX : prevMoveX + 1;
    });
  };

  const onClickRightArrow = () => {
    setMoveX((prevMoveX) => {
      return prevMoveX < -4 ? prevMoveX : prevMoveX - 1;
    });
  };

  return (
    <FilterBarWrap ref={barRef}>
      <ArrowWrap onClick={onClickLeftArrow}>
        <div className="globalIconBtn">
          <i className="fas fa-chevron-left"></i>
        </div>
      </ArrowWrap>
      <FilterBtns
        setCheckTheme={setCheckTheme}
        moveX={moveX}
        barWidth={barWidth}
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
