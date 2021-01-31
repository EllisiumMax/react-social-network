import c from './ChatInput.module.scss';


function ChatInput() {
    return (
        <div className={c.inputWindow}>
            <input  type='text' maxLength="5000" placeholder="Input your message.."></input>
            <button>SEND</button>
        </div>
    );
}

export default ChatInput;