import React, { useState } from "react";
import UserIcon from "../../../../contentsComponent/videoBox/videoSummary/videoExplanaion/videoExplanaionDetails/UserIcon";
import styled from "styled-components";

const VideoUploaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  margin: 0 0 12px 12px;
  font-size: 14px;
`;

const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-top: 0;
    margin-right: 16px;
  }
`;

const Author = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const CertificationMark = styled.div`
  .fas {
    margin-left: 4px;
    width: 13px;
    height: 13px;
    font-size: 12px;
    :hover {
      cursor: unset;
      transform: scale(1);
    }
  }
`;

const Subscriber = styled.div`
  font-size: 13px;
  color: hsl(0, 0%, 40%);
`;

const SubscriptionWrap = styled.div`
  display: flex;
  align-items: center;
`;

const SubscriptionBtn = styled.div`
  height: 18px;
  padding: 10px 16px;
  margin: 0 4px;
  text-align: center;
  border-radius: 2px;
  :hover {
    cursor: pointer;
  }
`;

const SubscriptionBtnActive = styled(SubscriptionBtn)`
  width: 40px;
  color: white;
  background-color: red;
`;

const SubscriptionBtnInactive = styled(SubscriptionBtn)`
  width: 42px;
  color: hsl(0, 0%, 38%);
  background-color: hsl(0, 0%, 90%);
`;

const SubscriptionAlarm = styled.div`
  width: 38px;
  height: 38px;
  color: hsl(0, 0%, 38%);
`;

const VideoUploader = () => {
  const [subscription, setSubscription] = useState(false);

  const onClickSubscriptionBtn = () => {
    setSubscription(!subscription);
  };

  return (
    <VideoUploaderWrap>
      <ProfileWrap>
        <UserIcon></UserIcon>
        <div>
          <Author>
            침착맨
            <CertificationMark>
              <i class="fas fa-check-circle"></i>
            </CertificationMark>
          </Author>
          <Subscriber>구독자 1억명</Subscriber>
        </div>
      </ProfileWrap>
      <SubscriptionWrap>
        {subscription ? (
          <SubscriptionBtnInactive onClick={onClickSubscriptionBtn}>
            구독중
          </SubscriptionBtnInactive>
        ) : (
          <SubscriptionBtnActive onClick={onClickSubscriptionBtn}>
            구독
          </SubscriptionBtnActive>
        )}

        {subscription ? (
          <SubscriptionAlarm className="globalIconBtn">
            <i className="far fa-bell"></i>
          </SubscriptionAlarm>
        ) : null}
      </SubscriptionWrap>
    </VideoUploaderWrap>
  );
};

export default VideoUploader;
