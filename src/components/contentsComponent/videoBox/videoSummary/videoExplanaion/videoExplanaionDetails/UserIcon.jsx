import React from "react";
import styled from "styled-components";
import UserData from "../../../../../../DB/UserData.json";

const UserIconWrap = styled.div`
  height: 36px;
  width: 36px;
  flex-shrink: 0;
  margin: 12px 12px 0 0;
  border-radius: 100%;
  overflow: hidden;
  img {
    height: 36px;
    width: 36px;
  }
`;

const UserIcon = ({ videoData = {}, commenters = {} }) => {
  // console.log("유저 아이콘", videoData);
  // console.log("댓글러", commenters);

  const setDefaultPath = () => {
    return `${process.env.PUBLIC_URL}/images/Happy(default).png`;
  };

  const setCommenterImagePath = () => {
    return `${process.env.PUBLIC_URL}` + commenters.userImageUrl;
  };

  const setUserImagePath = () => {
    const uploader = UserData.users.find(
      (user) => user.userId === videoData.userId
    );
    return `${process.env.PUBLIC_URL}` + uploader.userImageUrl;
  };

  return (
    <UserIconWrap>
      <img
        src={
          Object.keys(commenters).length === 0
            ? Object.keys(videoData).length === 0
              ? setDefaultPath()
              : setUserImagePath()
            : setCommenterImagePath()
        }
        alt="FACE"
      />
    </UserIconWrap>
  );
};

export default UserIcon;
