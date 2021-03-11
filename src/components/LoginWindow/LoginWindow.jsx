import React from "react";
import { Field, Form } from "react-final-form";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { login } from "redux/authReducer";
import {
  getCaptchaSel,
  getErrorCodesSel,
  getErrorMessagesSel,
  getisLoggedSel,
} from "redux/loginSelectors";
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

          {props.errorMessages
            ? props.errorMessages.map((msg) => (
                <div className={scss.serverErrors}>{msg}</div>
              ))
            : null}
          {props.captcha ? (
            <div className={scss.captchaContainer}>
              <img className={scss.captcha} src={props.captcha}></img>
              <Field
                component="input"
                type="input"
                name="captcha"
                autoComplete="off"
                placeholder="CAPTCHA"
                maxLength={7}
              />
            </div>
          ) : null}

          <button type="submit" disabled={submitting || pristine}>
            Submit
          </button>
        </form>
      </div>
    )}
  />
);

const mapStateToProps = (state) => ({
  isLogged: getisLoggedSel(state),
  errorMessages: getErrorMessagesSel(state),
  errorCodes: getErrorCodesSel(state),
  captcha: getCaptchaSel(state),
});

export default connect(mapStateToProps, { login })(LoginWindow);
