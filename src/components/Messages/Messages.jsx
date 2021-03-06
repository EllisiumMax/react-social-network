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
        startChating={props.startChating}
      />
      <Chat
        messages={props.messages}
        sendMessage={props.sendMessage}
        friendId={props.match.params.userId}
        loggedId={props.id}
        deleteMessage={props.deleteMessage}
        markAsSpam={props.markAsSpam}
        getMessages={props.getMessages}
        isFetching={props.isFetching}
      />
    </div>
  );
}

export default Messages;
