import React from "react";
import User from "./User/User";
import c from "./UserList.module.scss";

function UserList(props) {
  const users = props.userList.map((user) => (
    <User avatarURL={user.avatarURL} userName={user.userName} id={user.id} />
  ));

  return <div className={c.users}>{users};</div>;
}

export default UserList;
