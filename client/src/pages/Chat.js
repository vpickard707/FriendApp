import React from "react";
import Messenger from "../components/Chat/Messenger";
import getUserProfile from "../utils/getUserProfile"

function Chat() {
  const { profile } = getUserProfile()

  const myData = {
    user_name: profile.username,
    user_avatar: profile.avatar
  }
  return (
    <div>
      <h1 className='Header'>Chat:</h1>
      <div className="card chatCard">
      <Messenger currentUserData={myData} />
      </div>
    </div>
  );
}
export default Chat;
