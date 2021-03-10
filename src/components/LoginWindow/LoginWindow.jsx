import React from "react";
import { Field, Form } from "react-final-form";
import { connect } from "react-redux";
import { login } from "redux/authReducer";
import { InputEmail, InputPassword } from "utils/forms/fieldComponents";
import { composeValidators, email, required } from "utils/forms/fieldValidator";
import scss from "./LoginWindow.module.scss";

function LoginWindow(props) {
  return <LoginForm {...props} />;
}

const LoginForm = (props) => (
  <Form
    onSubmit={async (obj) => {
      props.login(obj);
    }}
    render={({ handleSubmit, submitting, pristine }) => (
      <div className={scss.window}>
        <form onSubmit={handleSubmit} className={scss.container}>
          <h1>Login</h1>
          <Field
            name="email"
            component={InputEmail}
            validate={composeValidators(required, email)}
          />
          <Field
            name="password"
            component={InputPassword}
            validate={required}
          />
          <div>
            <Field name="rememberMe" component="input" type="checkbox" />
            <label> Remember me?</label>
          </div>
          <button type="submit" disabled={submitting || pristine}>
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    )}
  />
);

export default connect(null, { login })(LoginWindow);
