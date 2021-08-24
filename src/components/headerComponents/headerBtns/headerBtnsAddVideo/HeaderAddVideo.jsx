import React, { useState } from "react";
import styled from "styled-components";

const StyledIcon = styled.i`
  margin-right: 8px;
`;

const HeaderAddVideo = () => {
  const [willBeShown, setWillBeShown] = useState(false);
  const showBlackExplanation = () => {
    setWillBeShown(true);
  };
  const hideBlackExplanation = () => {
    setWillBeShown(false);
  };

  return (
    <StyledIcon
      className="globalIconBtn"
      onMouseEnter={showBlackExplanation}
      onMouseLeave={hideBlackExplanation}
    >
      <i className="fas fa-video"></i>
      <div
        className={`globalBlackExplanation ${
          willBeShown ? "display__on" : "display__off"
        }`}
      >
        만들기
      </div>
    </StyledIcon>
  );
};

export default HeaderAddVideo;
