import React from "react";
import styled from "styled-components";

const PinBox = styled.div`
  color: hsl(0, 0%, 38%);
  height: 18px;
  font-size: 12px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  .fas {
    width: 16px;
    height: 16px;
    font-size: 10px;
    margin-right: 4px;
    padding-top: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Pinned = ({ willBeSent } = {}) => {
  return (
    <PinBox>
      <i className="fas fa-thumbtack"></i>
      <div>{willBeSent.userName}님이 고정함</div>
    </PinBox>
  );
};

export default Pinned;
