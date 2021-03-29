import React from "react";
import Chat from "./Chat/Chat";
import scss from "./Messages.module.scss";
import UserList from "./UserList/UserList";

function Messages(props) {
  return (
    <div className={scss.chatWrapper}>
      <UserList
        userList={props.userList}
        getMessages={props.getMessages}
        setFriendIdAC={props.setFriendIdAC}
      />
      <Chat
        messages={props.messages}
        sendMessage={props.sendMessage}
        friendId={props.friendId}
        loggedId={props.id}
      />
    </div>
  );
}

export default Messages;
