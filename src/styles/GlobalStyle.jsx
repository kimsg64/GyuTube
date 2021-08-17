import { createGlobalStyle } from "styled-components";

const GlobalIconStyle = createGlobalStyle`
  .globalIconBtnRect {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: hsl(0, 0%, 38%);
    :hover {
      cursor: pointer;
    }
    :active {
      background-color: hsl(0, 0%, 80%);
    }
  }

  .globalIconBtn {
    height: 40px;
    width: 40px;
    border-radius: 100%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: hsl(0, 0%, 38%);
    :active {
      background-color: hsl(0, 0%, 80%);
    }
    :hover {
      /* transform: scale(1.1); */
      cursor: pointer;
    }
}
`;

export default GlobalIconStyle;
