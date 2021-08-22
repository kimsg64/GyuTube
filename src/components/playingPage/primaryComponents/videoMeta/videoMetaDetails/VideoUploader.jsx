import React, { useState } from "react";
import UserIcon from "../../../../contentsComponent/videoBox/videoSummary/videoExplanaion/videoExplanaionDetails/UserIcon";
import styled from "styled-components";
import UserData from "../../../../../DB/UserData.json";

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
  box-sizing: content-box;
  height: 20px;
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

const VideoUploader = ({ willBeSent = {} }) => {
  const [subscription, setSubscription] = useState(false);

  const user = UserData.users.find((user) => user.userId === willBeSent.userId);

  const setSubscribersNumber = () => {
    if (user.subscriber.length < 1000) {
      return user.subscriber.length;
    } else if (user.subscriber.length < 10000) {
      return `${user.subscriber.length
        .toLocaleString("de-DE")
        .toString()
        .substring(0, 4)}천`;
    } else {
      return `${user.subscriber.length
        .toLocaleString("de-DE")
        .toString()
        .substring(0, 4)}만`;
    }
  };

  const onClickSubscriptionBtn = () => {
    setSubscription(!subscription);
  };

  return (
    <VideoUploaderWrap>
      <ProfileWrap>
        <UserIcon videoData={willBeSent} />
        <div>
          <Author>
            {user.userName}
            <CertificationMark>
              <i className="fas fa-check-circle"></i>
            </CertificationMark>
          </Author>
          <Subscriber>구독자 {setSubscribersNumber()}명</Subscriber>
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
