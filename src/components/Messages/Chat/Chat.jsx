import scss from "./Chat.module.scss";
import React from "react";
import Message from "./Message/Message";
import { Field, Form } from "react-final-form";

function Chat(props) {
  let messages = <p className={scss.noMessages}>No messages yet..</p>;
  if (props.messages.length > 0) {
    messages = props.messages.map((message, i) =>
      message.senderId !== props.loggedId ? (
        <Message
          key={message.id}
          userName={message.senderName}
          text={message.body}
          timeStamp={message.addedAt}
          self={false}
          viewed={message.viewed}
        />
      ) : (
        <Message
          key={message.id}
          userName="You"
          text={message.body}
          timeStamp={message.addedAt}
          self={true}
          viewed={message.viewed}
        />
      )
    );
  }
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
        props.sendMessage(props.friendId, { body: obj.message });
        form.reset();
      }
    }}
    render={({ handleSubmit, submitting }) => (
      <form onSubmit={handleSubmit}>
        <div className={scss.inputWindow}>
          <Field
            name="message"
            component="input"
            type="text"
            maxLength={5000}
            placeholder="Input your message.."
            autoComplete="off"
          />
          <button disabled={submitting}>SEND</button>
        </div>
      </form>
    )}
  />
);

export default Chat;
