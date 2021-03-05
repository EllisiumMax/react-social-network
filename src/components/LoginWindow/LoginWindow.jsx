import React from "react";
import { Field, Form } from "react-final-form";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { login } from "redux/authReducer";
import scss from "./LoginWindow.module.scss";

function LoginWindow(props) {
  return <LoginForm {...props} />;
}

const LoginForm = (props) => (
  <Form
    onSubmit={(obj) => {
      props.login(obj);
      <Redirect to={"/profile"} />;
    }}
    validate={(obj) => {}}
    render={({ handleSubmit }) => (
      <div className={scss.window}>
        <form onSubmit={handleSubmit} className={scss.container}>
          <h1>Login</h1>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
            autocomplete="off"
          />
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
          />
          <div>
            <Field name="rememberMe" component="input" type="checkbox" />
            <label> Remember me?</label>
          </div>
          <button type="submit" onClick={() => <Redirect to={"/profile"} />}>
            Submit
          </button>
        </form>
      </div>
    )}
  />
);

export default connect(null, { login })(LoginWindow);
