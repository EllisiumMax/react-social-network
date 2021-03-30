import { NavLink } from "react-router-dom";
import scss from "./User.module.scss";
import noAvatar from "../../../../images/unknown-user.svg";
import newMessage from "../../../../images/newMessage.svg";
import React from "react";

function User(props) {
  const path = `/messages/${props.id}`;
  return (
    <div
      className={scss.wrapper}
      onClick={() => {
        props.getMessages(props.id);
      }}
    >
      <NavLink to={path} activeClassName={scss.active}>
        <div className={scss.container}>
          <img
            className={scss.avatar}
            src={props.photos.small || props.photos.large || noAvatar}
            alt="User avatar"
          />
          <p>{props.userName}</p>
          {props.hasNewMessages ? (
            <div className={scss.newMessagesWrapper}>
              <img
                className={scss.newMessage}
                src={newMessage}
                alt="new message"
              />
              <p className={scss.newMessagesCount}>{props.newMessagesCount}</p>
            </div>
          ) : null}
        </div>
      </NavLink>
    </div>
  );
}

export default User;
