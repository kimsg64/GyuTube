import React from "react";
import styled from "styled-components";

const ViewAndDateWrap = styled.div`
  display: flex;
`;

const ViewAndDate = () => {
  return (
    <ViewAndDateWrap>
      <div>조회수 105만회</div>
      <div>1992.06.04</div>
    </ViewAndDateWrap>
  );
};

export default ViewAndDate;
