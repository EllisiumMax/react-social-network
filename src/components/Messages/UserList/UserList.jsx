import React from "react";
import User from "./User/User";
import c from "./UserList.module.scss";

function UserList(props) {
  const users = props.userList.map((user, i) => (
    <User
      key={`user${i}`}
      {...user}
      getMessages={props.getMessages}
      setFriendIdAC={props.setFriendIdAC}
    />
  ));

  return <div className={c.users}>{users};</div>;
}

export default UserList;
