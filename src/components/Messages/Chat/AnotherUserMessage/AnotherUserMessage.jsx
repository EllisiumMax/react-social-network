import c from "./AnotherUserMessage.module.scss";

function AnotherUserMessage(props) {
  return (
    <div className={c.messageWrapper}>
      <p className={c.user}>{props.userName}:</p>
      <p className={c.text}>{props.text}</p>
      <p className={c.time}>{props.timeStamp}</p>
    </div>
  );
}

export default AnotherUserMessage;
