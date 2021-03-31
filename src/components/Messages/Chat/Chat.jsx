import scss from "./Chat.module.scss";
import React, { useEffect, useRef, useState } from "react";
import Message from "./Message/Message";
import { Field, Form } from "react-final-form";

function Chat(props) {
  const messagesPerPage = 20;
  const numberOfPages = Math.ceil(props.messages.totalCount / 20);

  let messages = <p className={scss.welcomeMessage}>No messages yet..</p>;
  let blankSpace = useRef(null);

  let [counter, setCounter] = useState(1);

  useEffect(() => {
    if (blankSpace.current)
      blankSpace.current.scrollIntoView({ behavior: "smooth" });
  }, [props.messages.totalCount]);

  useEffect(() => {
    if (blankSpace.current)
      blankSpace.current.scrollIntoView({ behavior: "smooth" });
  }, [props.friendId]);

  function loadPage(e) {
    if (e.target.scrollTop < 1) {
      if (counter < numberOfPages) {
        setCounter(++counter);
        props.getMessages(props.friendId, counter, messagesPerPage);
        e.target.scrollTop = 200;
      } else setCounter(--counter);
    }
  }

  if (!props.friendId)
    return (
      <div className={scss.welcomeMessage}> Select user to start chat</div>
    );
  if (props.messages.items.length > 0) {
    messages = props.messages.items.map((message, i) =>
      message.senderId !== props.loggedId ? (
        <Message
          key={message.id}
          id={message.id}
          userName={message.senderName}
          text={message.body}
          timeStamp={message.addedAt}
          self={false}
          deleteMessage={props.deleteMessage}
          markAsSpam={props.markAsSpam}
        />
      ) : (
        <Message
          key={message.id}
          id={message.id}
          userName="You"
          text={message.body}
          timeStamp={message.addedAt}
          self={true}
          viewed={message.viewed}
          deleteMessage={props.deleteMessage}
          markAsSpam={props.markAsSpam}
        />
      )
    );
  }
  return (
    <div>
      <div onScroll={(e) => loadPage(e)} className={scss.chat}>
        {messages}
        <div ref={blankSpace} className={scss.blankSpace}></div>
      </div>
      <ChatInput {...props} />
    </div>
  );
}

const ChatInput = (props) => (
  <Form
    onSubmit={(obj, form) => {
      if (obj.message) {
        props.sendMessage(+props.friendId, { body: obj.message });
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
