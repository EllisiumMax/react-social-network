import { authRequest } from "./authReducer";

const INITIALIZE = "INITIALIZE";

const initialState = {
  appReady: false,
};

function appReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case INITIALIZE:
      newState.appReady = true;
      return newState;
    default:
      return state;
  }
}

function initializeCompleted() {
  return {
    type: INITIALIZE,
  };
}

export const initializeApp = () => (dispatch) => {
  dispatch(authRequest()).then(() => dispatch(initializeCompleted()));
};

export default appReducer;
