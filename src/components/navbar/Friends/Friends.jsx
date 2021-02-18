import React from "react";
import Friend from "./Friend/Friend";
import c from "./Friends.module.scss";

function Friends(props) {
  const friends = props.state.friends.map((friend) => (
    <Friend
      id={friend.id}
      imgLink={friend.imgLink}
      name={friend.name}
      online={friend.online}
    />
  ));

  return (
  <div className={c.container}>
      <h4>Your friends:</h4>
      <div className={c.tileWrapper}>
      {friends}
      </div>
      
      </div>);
}

export default Friends;
