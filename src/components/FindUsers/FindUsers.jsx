import React from "react";
import scss from "./FindUsers.module.scss";

function FindUsers(props) {
  const users = props.findUsersPage.map((user) => {
    return (
      <div className={scss.wrapper}>
        <div className={scss.avatar}>
          <img className={scss.photo} src={user.avatarUrl} alt="user avatar" />
          {user.followed ? (
            <button className={scss.unSubcribe} onClick={() => {props.unSubscribe(user.id)}}>
              UNSUBSCRIBE
            </button>
          ) : (
            <button className={scss.subcribe} onClick={() => {props.subscribe(user.id)}}>
              SUBSCRIBE
            </button>
          )}
        </div>
        <div className={scss.nameAge}>
          <p className={scss.name}>{user.fullName}</p>
          <p className={scss.age}>Age: {user.age}</p>
        </div>
        <p className={scss.location}>
          From: {user.city}, {user.country}
        </p>
        <p className={scss.status}>Status: {user.status}</p>
      </div>
    );
  });
  return <div>{users}</div>;
}

export default FindUsers;
