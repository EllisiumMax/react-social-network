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
      console.log(obj);
      props.login(obj);
      <Redirect to={"/profile"} />;
    }}
    validate={(obj) => {}}
    render={({ handleSubmit }) => (
      <div className={scss.window}>
        <form onSubmit={handleSubmit} className={scss.container}>
          <h1>Login</h1>
          <div>
            <Field name="email">
              {({ input }) => (
                <input type="email" placeholder="Email" {...input} />
              )}
            </Field>
          </div>

          <div>
            <Field name="password">
              {({ input }) => (
                <input type="password" placeholder="Password" {...input} />
              )}
            </Field>
          </div>

          <div>
            <Field name="rememberMe" type="checkbox">
              {({ input }) => <input type="checkbox" {...input} />}
            </Field>
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
