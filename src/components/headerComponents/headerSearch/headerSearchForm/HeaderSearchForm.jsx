import React, { useState } from "react";
import styled from "styled-components";
import HeaderSearchBtn from "./headerSearchBtn/HeaderSearchBtn";
import HeaderSearchKeyboard from "./headerSearchKeyboard/HeaderSearchKeyboard";
import VideoData from "../../../../DB/VideoData.json";

const HeaderSearchFormWrap = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  border: solid 1.5px hsl(0, 0%, 80%);
  padding-left: 4px;
  margin-left: 40px;
  position: reltive;
`;

const HeaderSearchFormBar = styled.div`
  width: 100%;
  max-width: 575;
  display: flex;
  position: relative;
  .search_input {
    width: 100%;
    border: none;
    outline: none;
  }
`;

const HeaderSearchFormMatchedBox = styled.ol`
  width: calc(100% + 5px);
  padding: 8px 0 0 4px;
  background-color: white;
  position: absolute;
  border: solid 1px hsl(0, 0%, 80%);
  top: 120%;
  left: -5px;
  li {
    margin: 4px 12px 8px 8px;
    padding: 2px;
    :hover {
      cursor: pointer;
      background-color: var(--hover-bg-color);
    }
  }
`;

const HeaderSearchForm = ({
  value = "",
  setValue = () => {},
  setSearchedByKeyword = () => {},
}) => {
  const [matchedList, setMatchedList] = useState([]);
  const [virtualKeyboardInput, setVirtualKeyboardInput] = useState("");
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
  // console.log("와! 여기까지 왔다", virtualKeyboardInput);

  const onChangeInput = (e) => {
    setValue(e.target.value);
    // console.log(VideoData.videos);
  };

  const findMatches = (word, videos) => {
    return videos.filter((video) => {
      const regex = new RegExp(word, "gi");
      return video.mainTitle.match(regex);
    });
  };

  const showMatchedList = () => {
    // console.log(e.target.value);
    const macthedVideos = findMatches(value, VideoData.videos);
    // console.log(value);
    // console.log(macthedVideos);
    const titleOfMatchedVideo = macthedVideos.map((video) => {
      return video.mainTitle;
    });
    setMatchedList(titleOfMatchedVideo);
  };
  // console.log(value);

  const onClickMatchedTitle = (e) => {
    // console.log(e.target.innerText);
    setValue(e.target.innerText);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    // console.log(macthedVideos);
    const macthedVideos = findMatches(value, VideoData.videos);
    setSearchedByKeyword(macthedVideos);
    setMatchedList([]);
    setValue("");
  };

  return (
    <HeaderSearchFormWrap onSubmit={onSubmitForm}>
      <HeaderSearchFormBar>
        <input
          placeholder="검색"
          className="search_input"
          value={showVirtualKeyboard ? virtualKeyboardInput : value}
          onChange={onChangeInput}
          onKeyUp={showMatchedList}
        />
        <HeaderSearchFormMatchedBox
          className={
            matchedList.length === 0 ||
            matchedList.length === VideoData.videos.length
              ? "display__off"
              : "display__on"
          }
        >
          {matchedList.map((match) => {
            return <li onClick={onClickMatchedTitle}>{match}</li>;
          })}
        </HeaderSearchFormMatchedBox>
        <HeaderSearchKeyboard
          onChange={showMatchedList}
          setValue={setValue}
          showVirtualKeyboard={showVirtualKeyboard}
          setShowVirtualKeyboard={setShowVirtualKeyboard}
          virtualKeyboardInput={virtualKeyboardInput}
          setVirtualKeyboardInput={setVirtualKeyboardInput}
        />
      </HeaderSearchFormBar>
      <HeaderSearchBtn />
    </HeaderSearchFormWrap>
  );
};

export default HeaderSearchForm;
