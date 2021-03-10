import DAL from "api/apiDAL";

const SERVER_ERROR = "SERVER-ERROR";

const initialState = {
  isLogged: false,
  id: null,
  login: null,
  email: null,
  messages: [],
  isFetching: false,
  serverErrors: null,
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
      setTimeout(() => newState.serverErrors = [], 10000);
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

export function serverError(messages) {
  return {
    type: SERVER_ERROR,
    messages,
  };
}

export function loginRequest() {
  return (dispatch) => {
    DAL.auth.loginRequest().then((res) => {
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
        loginRequest();
        DAL.auth.loginRequest().then((res) => {
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
      } else {
        console.log(res.messages);
        dispatch(serverError(res.messages));
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
