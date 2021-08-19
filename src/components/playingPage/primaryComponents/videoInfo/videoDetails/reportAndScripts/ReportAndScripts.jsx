import React from "react";
import styled from "styled-components";

const ReportAndScriptsWrap = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReportAndScripts = () => {
  return (
    <ReportAndScriptsWrap className="globalIconBtn">
      <i class="fas fa-ellipsis-h"></i>
    </ReportAndScriptsWrap>
  );
};

export default ReportAndScripts;
