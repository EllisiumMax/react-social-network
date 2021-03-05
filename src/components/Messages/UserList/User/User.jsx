import { NavLink } from "react-router-dom";
import scss from "./User.module.scss";
import noAvatar from "../../../../images/unknown-user.svg";
import newMessage from "../../../../images/newMessage.svg";
import React from "react";

function User(props) {
  const path = `/toucan/dialogs/${props.id}`;
  return (
    <div className={scss.wrapper}>
      <NavLink to={path} activeClassName={scss.active}>
        <div className={scss.container}>
          <img
            className={scss.avatar}
            src={props.photos.small || props.photos.large || noAvatar}
            alt="User avatar"
          />
          <p>{props.userName}</p>
          {!props.hasNewMessages ? <img className={scss.newMessage} src={newMessage}/> : null }
        </div>
      </NavLink>
    </div>
  );
}

export default User;
