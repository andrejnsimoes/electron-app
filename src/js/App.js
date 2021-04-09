
import React from 'react';
import TeamRequestsNotificationsButton from 'kraken/components/TeamRequestsNotificationsButton';

export default function App() {

  return (
    <>
      <h1>I am App Component!!!</h1>
      <TeamRequestsNotificationsButton />
      <button onClick={() => {
        electron.notificationApi.sendNotification('My custom notification!');
      }}>Notify</button>
    </>
  )
}
