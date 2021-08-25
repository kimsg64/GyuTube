import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .globalBlackExplanation {
    width: auto;
    padding: 8px 12px;
    position: absolute;
    top: 56px;
    background-color: black;
    color: white;
    opacity: 0.7;
    border-radius: 2px;
    font-size: 12px;
    font-style: normal;
    display: none;
  }
  

  .display__on {
    display: block;
  }
  .display__off {
    display: none;
  }


    /* 선택됐을 때(디폴트) */
  .selected,
  .selected > * {
    color: red;
    background-color: var(--default-bg-color);
  }
  .selected:hover,
  .selected:hover > * {
    background-color: var(--hover-bg-color);
  }
  .selected:active,
  .selected:active > * {
    background-color: var(--active-bg-color);
  }



  .globalIconBtnRect {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: hsl(0, 0%, 38%);
    :hover {
      cursor: pointer;
      background-color: var(--hover-bg-color);
    }
    :active {
      background-color: var(--active-bg-color);
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
      cursor: pointer;
    }
}
`;

export default GlobalStyle;
