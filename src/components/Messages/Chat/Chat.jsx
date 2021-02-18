import c from "./Chat.module.scss";
import React from "react";
import AnotherUserMessage from "./AnotherUserMessage/AnotherUserMessage";
import SelfMessage from "./SelfMessage/SelfMessage";

function ChatInput(props) {
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
  
  function bindViewToLastMessage(e) {
    const chatWrapper = e.target.parentElement.parentElement;
    const lastMessageInChat = chatWrapper.firstChild.lastChild;
    lastMessageInChat.scrollIntoView({ behavior: 'smooth', block: 'center'});
  }

  function onTextChange(e) {
    const text = e.target.value;
    props.getText(text);
  }

  function onSendMessage(e) {
    props.sendMessage();
    e.target.previousSibling.focus();
    bindViewToLastMessage(e);
  }

  return (
    <div>
      <div className={c.chat}>{messages}</div>
      <div className={c.inputWindow}>
        <input
          type="text"
          maxLength="5000"
          placeholder="Input your message.."
          onChange={onTextChange}
          value={props.messagesPage.tempText}
        />
        <button onClick={onSendMessage}>SEND</button>
      </div>
    </div>
  );
}

export default ChatInput;
