import AnotherUserMessage from "./AnotherUserMessage/AnotherUserMessage";
import c from "./Chat.module.scss";
import ChatInput from "./ChatInput/ChatInput";
import SelfMessage from "./SelfMessage/SelfMessage";

function Chat() {
  return (
    <div className={c.wrapper}>
      <div className={c.chat}>
        <SelfMessage
          text="Hello, Roman. eqweqwe qweqw eqwe qwe qwewq ewqeqweqeqwewq eqwe wqe wq eqw ewqew q eqwe qw eqw e"
          timeStamp="31.01.2021 14:15"
        />
        <AnotherUserMessage
          text="Hello, Max. qwewe qwewq ewqewq eqw ewqe wqe wew qwewq wqe wq eqwewqe we w wqe"
          timeStamp="31.01.2021 14:17"
          userName="Roman"
        />
        <SelfMessage
          text="Hello, Roman. eqweqwe qweqw eqwe qwe qwewq ewqeqweqeqwewq eqwe wqe wq eqw ewqew q eqwe qw eqw e"
          timeStamp="31.01.2021 14:15"
        />
        <SelfMessage
          text="Hello, Roman. eqweqwe qweqw eqwe qwe qwewq ewqeqweqeqwewq eqwe wqe wq eqw ewqew q eqwe qw eqw e"
          timeStamp="31.01.2021 14:15"
        />
        <AnotherUserMessage
          text="Hello, Max. qwewe qwewq ewqewq eqw ewqe wqe wew qwewq wqe wq eqwewqe we w wqe"
          timeStamp="31.01.2021 14:17"
          userName="Roman"
        />
        <AnotherUserMessage
          text="Hello, Max. qwewe qwewq ewqewq eqw ewqe wqe wew qwewq wqe wq eqwewqe we w wqe"
          timeStamp="31.01.2021 14:17"
          userName="Roman"
        />
        <SelfMessage
          text="Hello, Roman. eqweqwe qweqw eqwe qwe qwewq ewqeqweqeqwewq eqwe wqe wq eqw ewqew q eqwe qw eqw e"
          timeStamp="31.01.2021 14:15"
        />
        <AnotherUserMessage
          text="Hello, Max. qwewe qwewq ewqewq eqw ewqe wqe wew qwewq wqe wq eqwewqe we w wqe"
          timeStamp="31.01.2021 14:17"
          userName="Roman"
        />
      </div>
      <ChatInput />
    </div>
  );
}

export default Chat;
