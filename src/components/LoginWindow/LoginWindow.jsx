import React from "react";
import { Field, Form } from "react-final-form";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { login } from "redux/authReducer";
import { InputEmail, InputPassword } from "utils/forms/fieldComponents";
import { composeValidators, email, required } from "utils/forms/fieldValidator";
import scss from "./LoginWindow.module.scss";

function LoginWindow(props) {
  return props.isLogged ? <Redirect to="profile" /> : <LoginForm {...props} />;
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
            Submit
          </button>
          {props.serverErrors
            ? props.serverErrors.map((msg) => (
                <div className={scss.serverErrors}>Login failed: {msg} </div>
              ))
            : null}
        </form>
      </div>
    )}
  />
);

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  serverErrors: state.auth.serverErrors,
});

export default connect(mapStateToProps, { login })(LoginWindow);
