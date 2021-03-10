import scss from "./Chat.module.scss";
import React from "react";
import Message from "./Message/Message";
import { Field, Form } from "react-final-form";
import moment from "moment";

function Chat(props) {
  const messages = props.messagesPage.messages.map((message) =>
    message.userName ? (
      <Message
        userName={message.userName}
        text={message.text}
        timeStamp={message.timeStamp}
        self={false}
      />
    ) : (
      <Message text={message.text} timeStamp={message.timeStamp} self={true} />
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
    onSubmit={(obj, form) => {
      if (obj.message) {
        const timeStamp = moment().format("MM.DD.YY, HH:mm:ss");
        props.sendMessage(obj.message, timeStamp);
        form.reset();
      }
    }}
    render={({ handleSubmit, submitting}) => (
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
          <button disabled={submitting}>SEND</button>
        </div>
      </form>
    )}
  />
);

export default Chat;
