import React from "react";
import ChatContainer from "./Chat/ChatContainer";
import scss from "./Messages.module.scss";
import UserList from "./UserList/UserList";

function Messages(props) {
  return (
    <div className={scss.chatWrapper}>
      <UserList {...props} />
      <ChatContainer />
    </div>
  );
}

export default Messages;
