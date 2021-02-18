import React from "react";
import ChatContainer from "./Chat/ChatContainer";
import c from "./Messages.module.scss";
import UserList from "./UserList/UserList";

function Messages(props) {
  return (
    <div className={c.chatWrapper}>
      <UserList userList={props.state.userList} />
      <ChatContainer />
    </div>
  );
}

export default Messages;
