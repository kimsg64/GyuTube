import { createGlobalStyle } from "styled-components";

const GlobalIconStyle = createGlobalStyle`
  i {
    height: 36px;
    width: 36px;
    border-radius: 100%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .fas {
      font-size: 10px;
    }
    :active {
      background-color: hsl(0, 0%, 80%);
    }
  }
`;

export default GlobalIconStyle;
