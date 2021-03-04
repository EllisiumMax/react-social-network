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
      newState.isLogged = true;
      newState.login = action.login;
      newState.id = action.id;
      newState.email = action.email;
      return newState;
    default:
      return state;
  }
}

export function setLogin(login, id, email, messages) {
  return {
    type: "LOGIN-REQ",
    login: login,
    id: id,
    email: email,
    messages: messages,
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
            res.data.messages
          )
        );
      }
    });
  };
}

export default authReducer;
