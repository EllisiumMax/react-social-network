import React from "react";
import scss from "./Login.module.scss";

function Login(props) {
  return (
    <div className={scss.login} >{props.isLogged ? <p>{props.login}</p> : <button onClick={() => props.loginRequest()}>Login</button>}</div>
  );
}

export default Login;