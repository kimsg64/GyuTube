import React from "react";
import styled from "styled-components";

const NavigatorStorageWrap = styled.div`
  width: inherit;
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigatorStorage = () => {
  return (
    <NavigatorStorageWrap>
      <i className="fas fa-clone"></i>
    </NavigatorStorageWrap>
  );
};

export default NavigatorStorage;
