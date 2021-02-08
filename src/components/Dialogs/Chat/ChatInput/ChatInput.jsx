import c from './ChatInput.module.scss';
import React from 'react';

const ref = React.createRef();
function sendMessage() {
const text = ref.current.value;
alert(text);
}

function ChatInput() {
    return (
        <div className={c.inputWindow}>
            <input ref={ref}  type='text' maxLength="5000" placeholder="Input your message.."></input>
            <button onClick={sendMessage}>SEND</button>
        </div>
    );
}

export default ChatInput;