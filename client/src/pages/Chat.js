import React, { useState } from "react";
import Messenger from "../components/Chat/Messenger";

function Chat() {
  const [userData, setUserData] = useState(null);
  return (
    <div>
      <Messenger currentUserData={userData} />
    </div>
  );
}
export default Chat;
