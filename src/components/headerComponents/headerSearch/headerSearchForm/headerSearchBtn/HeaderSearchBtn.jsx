import React, { useState } from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  width: 72px;
  height: 30px;
  border: none;
  border-left: solid 1.5px hsl(0, 0%, 80%);
  :hover {
    cursor: pointer;
    background-color: hsl(0, 0%, 80%);
    border-color: hsl(0, 0%, 80%);
    .fa-search {
      color: black;
    }
  }
  .fa-search {
    font-size: 16px;
    color: hsl(0, 0%, 38%);
  }
  .globalBlackExplanation {
    /* 좌우 이동...??? */
  }
`;

const HeaderSearchBtn = () => {
  const [willBeShown, setWillBeShown] = useState(false);
  const showBlackExplanation = () => {
    setWillBeShown(true);
  };
  const hideBlackExplanation = () => {
    setWillBeShown(false);
  };
  return (
    <StyledBtn
      onMouseEnter={showBlackExplanation}
      onMouseLeave={hideBlackExplanation}
    >
      <i className="fas fa-search"></i>
      <div
        className={`globalBlackExplanation ${
          willBeShown ? "display__on" : "display__off"
        }`}
      >
        검색
      </div>
    </StyledBtn>
  );
};

export default HeaderSearchBtn;
