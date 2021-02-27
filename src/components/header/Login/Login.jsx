import React from "react";
import scss from "./Login.module.scss";

function Login(props) {
    function sendLogInReq() {
        props.loginRequest();
    }
  return (
    <div className={scss.login} >{props.isLogged ? <p>{props.login}</p> : <button onClick={() => sendLogInReq()}>Login</button>}</div>
  );
}

export default Login;