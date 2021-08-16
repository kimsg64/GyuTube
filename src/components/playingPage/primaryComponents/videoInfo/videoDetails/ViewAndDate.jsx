import React from "react";
import styled from "styled-components";

const ViewAndDateWrap = styled.div`
  display: flex;
  font-size: 14px;
`;

const ViewAndDate = () => {
  return (
    <ViewAndDateWrap>
      <div>조회수 1,056,594회</div>
      <span>・</span>
      <div>1992.06.04</div>
    </ViewAndDateWrap>
  );
};

export default ViewAndDate;
