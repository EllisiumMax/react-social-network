import DAL from "api/apiDAL";

const SERVER_ERROR = "SERVER-ERROR";
const CAPTCHA = "CAPTCHA";

const initialState = {
  isLogged: false,
  id: null,
  login: null,
  email: null,
  messages: [],
  isFetching: false,
  serverErrors: null,
  errorCodes: null,
  captcha: null,
};

function authReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case "LOGIN-REQ":
      newState.isLogged = action.isLogged;
      newState.login = action.login;
      newState.id = action.id;
      newState.email = action.email;
      return newState;
    case SERVER_ERROR:
      newState.serverErrors = action.messages;
      newState.errorCodes = action.code;
      setTimeout(() => {
        newState.serverErrors = newState.errorCodes = null;
      }, 0);
      return newState;
    case CAPTCHA:
      newState.captcha = action.url;
      setTimeout(() => {
        newState.captcha = newState.serverErrors = newState.errorCodes = null;
      }, 0);
      return newState;
    default:
      return state;
  }
}

export function setLogin(login, id, email, messages, isLogged) {
  return {
    type: "LOGIN-REQ",
    login,
    id,
    email,
    messages,
    isLogged,
  };
}

function serverError(messages, code) {
  return {
    type: SERVER_ERROR,
    messages,
    code,
  };
}

function captcha(url) {
  return {
    type: CAPTCHA,
    url,
  };
}

export function authRequest() {
  return (dispatch) => {
    return DAL.auth.authRequest().then((res) => {
      if (res.resultCode === 0) {
        dispatch(
          setLogin(
            res.data.login,
            res.data.id,
            res.data.email,
            res.data.messages,
            true
          )
        );
      }
    });
  };
}

export function login(loginData) {
  return (dispatch) => {
    DAL.auth.login(loginData).then((res) => {
      if (res.resultCode === 0) {
        authRequest();
        DAL.auth.authRequest().then((res) => {
          if (res.resultCode === 0) {
            dispatch(
              setLogin(
                res.data.login,
                res.data.id,
                res.data.email,
                res.data.messages,
                true
              )
            );
          }
        });
      } else if (res.resultCode === 10) {
        dispatch(serverError(res.messages, res.resultCode));
        DAL.auth.getCaptcha().then((res) => dispatch(captcha(res.url)));
      } else {
        dispatch(serverError(res.messages, res.resultCode));
      }
    });
  };
}

export function logout() {
  return (dispatch) => {
    DAL.auth.logout().then((res) => {
      if (res.resultCode === 0) {
        dispatch(setLogin(null, null, null, [], false));
      }
    });
  };
}

export default authReducer;
