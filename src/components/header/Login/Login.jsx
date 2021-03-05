import React from "react";
import { NavLink } from "react-router-dom";
import scss from "./Login.module.scss";

function Login(props) {
  return props.isLogged ? (
    <p className={scss.loginName}>{props.login}</p>
  ) : (
    <NavLink to={"/login"} className={scss.loginBtn} onClick={() => props.loginRequest()}>
      Login
    </NavLink>
  );
}

export default Login;
