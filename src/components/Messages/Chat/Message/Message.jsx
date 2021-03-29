import moment from "moment";
import React from "react";
import scss from "./Message.module.scss";
import viewed from "../../../../images/viewed.svg";
import notViewed from "../../../../images/not_viewed.svg";

function SelfMessage(props) {
  const time = moment
    .utc(props.timeStamp)
    .local()
    .format("DD.MM.YYYY, HH:mm:ss");

  return (
    <div
      className={
        props.self
          ? `${scss.messageWrapper} ${scss.self}`
          : `${scss.messageWrapper} ${scss.anotherUser}`
      }
    >
      <p className={scss.user}>{props.userName}</p>
      <p className={scss.text}>{props.text}</p>
      <p className={scss.time}>{time}</p>
      {props.viewed ? (
        <img className={scss.isViewed} src={viewed} alt="viewed"></img>
      ) : (
        <img className={scss.isViewed} src={notViewed} alt="not viewed"></img>
      )}
    </div>
  );
}

export default SelfMessage;
