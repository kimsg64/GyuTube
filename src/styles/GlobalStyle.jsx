import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* 글로벌 텍스트바 */
  .globalItemsWrap {
    display: flex;
    flex-direction: column;
  }
  .globalItemBar {
    height: 40px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    :hover {
      cursor: pointer;
      background-color: var(--hover-bg-color);
    }
    :active {
      background-color: var(--active-bg-color);
    }
  }
  .globalIconWrap {
    width: 30px;
    height: 30px;
    margin-right: 18px;
  }
  .globalTextBar {
    width: 144px;
    height: 20px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
  }


  /* 글로벌 설명창 */
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
  

  /* 글로벌 디스플레이 on/off */
  .display__on {
    display: block;
  }
  .display__off {
    display: none;
  }


  /* 아이콘 선택됐을 때(디폴트) */
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

  /* 글로벌 아이콘 */
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
