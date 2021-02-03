import Chat from "./Chat/Chat";
import c from "./Diaglos.module.scss";
import UserList from "./UserList/UserList";

function Diaglos(props) {
  return (
    <div className={c.chatWrapper}>
      <UserList userList={props.state.userList} />
      <Chat messages={props.state.messages} />
    </div>
  );
}

export default Diaglos;
