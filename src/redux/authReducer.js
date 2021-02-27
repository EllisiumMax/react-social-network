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

export function loginRequest(login, id, email, messages) {
  return {
    type: "LOGIN-REQ",
    login: login,
    id: id,
    email: email,
    messages: messages,
  };
}

export default authReducer;
