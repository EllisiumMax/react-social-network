import React from "react";
import scss from "./LoginWindow.module.scss";

function LoginWindow() {
  return (
    <div className={scss.window}>
      <form action="" className={scss.container}>
        <div>
          <label>Login:</label>
          <input type="text" />
        </div>

        <div>
          <label>Password:</label>
          <input type="password"></input>
        </div>

        <button>Send</button>
      </form>
    </div>
  );
}

export default LoginWindow;
