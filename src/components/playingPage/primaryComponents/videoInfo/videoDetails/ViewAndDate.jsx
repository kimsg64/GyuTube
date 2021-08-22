import React from "react";
import styled from "styled-components";

const ViewAndDateWrap = styled.div`
  display: flex;
  font-size: 14px;
`;

const ViewAndDate = ({ videoViews = "", videoUploadDate = "" }) => {
  const setComma = () => {
    return parseInt(videoViews).toLocaleString();
  };

  return (
    <ViewAndDateWrap>
      <div>조회수 {setComma()}회</div>
      <span>・</span>
      <div>{videoUploadDate}</div>
    </ViewAndDateWrap>
  );
};

export default ViewAndDate;
