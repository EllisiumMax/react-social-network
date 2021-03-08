import React from "react";
import scss from "./Message.module.scss";

function SelfMessage(props) {
  return (
    <div
      className={
        props.self
          ? `${scss.messageWrapper} ${scss.self}`
          : `${scss.messageWrapper} ${scss.anotherUser}`
      }
    >
      <p className={scss.user}>{props.userName ? props.userName : "You: "}</p>
      <p className={scss.text}>{props.text}</p>
      <p className={scss.time}>{props.timeStamp}</p>
    </div>
  );
}

export default SelfMessage;
