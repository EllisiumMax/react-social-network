import c from "./SelfMessage.module.scss";

function SelfMessage(props) {
  return (
    <div className={c.messageWrapper}>
      <p className={c.user}>You:</p>
      <p className={c.text}>{props.text}</p>
      <p className={c.time}>{props.timeStamp}</p>
    </div>
  );
}

export default SelfMessage;
