import DAL from "api/apiDAL";

const initialState = {
  isLogged: false,
  id: null,
  login: "guest",
  email: null,
  messages: [],
  isFetching: false,
};

function authReducer(state = initialState, action) {
  const newState = { ...state };
  newState.messages = [...state.messages];

  switch (action.type) {
    case "LOGIN-REQ":
      newState.isLogged = action.isLogged;
      newState.login = action.login;
      newState.id = action.id;
      newState.email = action.email;
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
      console.log(res);
      if (res.resultCode === 10) alert("wrong password");
      if (res.resultCode === 0) {
        loginRequest();
        window.location.reload();
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
      }
    });
  };
}

export function logout() {
  return (dispatch) => {
    DAL.auth.logout().then((res) => {
      if (res.resultCode === 0) {
        dispatch(setLogin("guest", null, null, [], false));
      }
    });
  };
}

export default authReducer;
