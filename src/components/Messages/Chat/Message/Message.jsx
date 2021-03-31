import moment from "moment";
import React, { useState } from "react";
import scss from "./Message.module.scss";
import viewed from "../../../../images/viewed.svg";
import notViewed from "../../../../images/not_viewed.svg";

function Message(props) {
  const time = moment
    .utc(props.timeStamp)
    .local()
    .format("DD.MM.YYYY, HH:mm:ss");

  const [menu, showMenu] = useState(false);
  function toggle() {
    if (menu) showMenu(false);
    else showMenu(true);
  }
  window.addEventListener("click", () => {
    if (menu) showMenu(false);
  });

  return (
    <div
      onClick={() => {
        showMenu(false);
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        toggle();
      }}
      className={
        props.self
          ? `${scss.messageWrapper} ${scss.self}`
          : `${scss.messageWrapper} ${scss.anotherUser}`
      }
    >
      {menu ? (
        <div className={scss.contextMenu}>
          <p onClick={() => props.deleteMessage(props.id)}>Delete message</p>
          <p onClick={() => props.markAsSpam(props.id)}>Mark as SPAM</p>
        </div>
      ) : null}
      <p className={scss.user}>{props.userName}</p>
      <p className={scss.text}>{props.text}</p>
      <p className={scss.time}>{time}</p>

      {props.viewed && props.self && (
        <img className={scss.isViewed} src={viewed} alt="viewed"></img>
      )}
      {!props.viewed && props.self && (
        <img className={scss.isViewed} src={notViewed} alt="not viewed"></img>
      )}
    </div>
  );
}

export default Message;
