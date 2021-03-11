import React from "react";
import Chat from "./Chat/Chat";
import scss from "./Messages.module.scss";
import UserList from "./UserList/UserList";

function Messages(props) {
  return (
    <div className={scss.chatWrapper}>
      <UserList userList={props.userList} />
      <Chat messages={props.messages} sendMessage={props.sendMessage} />
    </div>
  );
}

export default Messages;
