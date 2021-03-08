import scss from "./Chat.module.scss";
import React from "react";
import AnotherUserMessage from "./AnotherUserMessage/AnotherUserMessage";
import SelfMessage from "./SelfMessage/SelfMessage";
import { Field, Form } from "react-final-form";
import moment from "moment";

function Chat(props) {
  const messages = props.messagesPage.messages.map((message) =>
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
    <div>
      <div className={scss.chat}>{messages}</div>
      <ChatInput {...props} />
    </div>
  );
}

const ChatInput = (props) => (
  <Form
    onSubmit={(obj) => {
      const timeStamp = moment().format("MM.DD.YY, HH:mm:ss");
      props.sendMessage(obj.message, timeStamp);
    }}
    validate={(obj) => {}}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div className={scss.inputWindow}>
          <Field
            name="message"
            component="input"
            type="text"
            maxLength={5000}
            placeholder="Input your message.."
            autocomplete="off"
          />
          <button>SEND</button>
        </div>
      </form>
    )}
  />
);

export default Chat;
