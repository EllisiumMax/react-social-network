import AnotherUserMessage from "./AnotherUserMessage/AnotherUserMessage";
import c from "./Chat.module.scss";
import ChatInput from "./ChatInput/ChatInput";
import SelfMessage from "./SelfMessage/SelfMessage";

function Chat(props) {
  const messages = props.messages.map((message) =>
    message.userName ? (
      <AnotherUserMessage
        userName={message.userName}
        text={message.text}
        timeStamp={message.timeStamp}
      />
    ) : (
      <SelfMessage text={message.text} timeStamp={message.timeStamp} />
    )
  );


  return (
    <div className={c.wrapper}>
      <div className={c.chat}>{messages}</div>
      <ChatInput />
    </div>
  );
}

export default Chat;
