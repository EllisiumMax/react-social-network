import { NavLink } from "react-router-dom";
import c from "./User.module.scss";

function User(props) {
  const path = `/toucan/dialogs/${props.id}`;
  return (
    <div className={c.wrapper}>
      <NavLink to={path} activeClassName={c.active}>
        <div className={c.container}>
          <img className={c.avatar} src={props.avatarURL} alt="User avatar" />
          <p>{props.userName}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default User;
