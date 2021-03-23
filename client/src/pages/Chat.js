import React, { useState } from "react";
import Messenger from "../components/Chat/Messenger";
import getUserProfile from "../utils/getUserProfile"

function Chat() {
  const [userData, setUserData] = useState(null);
  const { profile } = getUserProfile()

  const myData = {
    user_name: profile.username,
    user_avatar: profile.avatar
  }
  return (
    <div>
      <Messenger currentUserData={myData} />
    </div>
  );
}
export default Chat;
