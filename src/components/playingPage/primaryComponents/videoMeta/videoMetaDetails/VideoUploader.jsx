import React from "react";
import UserIcon from "../../../../contentsComponent/videoBox/videoSummary/videoExplanaion/videoExplanaionDetails/UserIcon";
import styled from "styled-components";

const MetaWrap = styled.div`
  border-top: solid 1px hsl(0, 0%, 80%);
  border-bottom: solid 1px hsl(0, 0%, 80%);
  display: flex;
  justify-content: space-between;
`;

const ProfileWrap = styled.div`
  display: flex;
`;

const SubscriptionWrap = styled.div`
  display: flex;
`;

const VideoUploader = () => {
  return (
    <MetaWrap>
      <ProfileWrap>
        <UserIcon></UserIcon>
        <div>
          <div>침착맨</div>
          <div>구독자 1억명</div>
        </div>
      </ProfileWrap>
      <SubscriptionWrap>
        <div>구독중</div>
        <i class="far fa-bell"></i>
      </SubscriptionWrap>
    </MetaWrap>
  );
};

export default VideoUploader;
