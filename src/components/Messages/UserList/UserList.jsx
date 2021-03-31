import React from "react";
import User from "./User/User";
import c from "./UserList.module.scss";

function UserList(props) {
  let users = props.userList.map((user, i) => (
    <User key={`user${i}`} {...user} getMessages={props.getMessages} />
  ));

  return <div className={c.users}>{users}</div>;
}

export default UserList;
