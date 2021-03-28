import DAL from "api/apiDAL";

const ERROR_ON_SUBMIT = "ERROR-ON-SUBMIT";
const SENT_SUCESSFULLY = "SENT-SUCESSFULLY";
const IS_FETCHING = "IS-FETCHING";
const HIDE_NOTIFICATIONS = "HIDE-NOTIFICATIONS";

const initialState = {
  messages: [],
  sentSucessfully: false,
  isFetching: false,
};

function settingsReducer(state = initialState, action) {
  let newState = { ...state };
  newState.messages = [...state.messages];
  switch (action.type) {
    case ERROR_ON_SUBMIT:
      newState.messages = action.messages;
      newState.sentSucessfully = false;
      return newState;
    case SENT_SUCESSFULLY:
      newState.sentSucessfully = true;
      newState.messages = [];
      return newState;
    case IS_FETCHING:
      newState.isFetching = action.boolean;
      return newState;
    case HIDE_NOTIFICATIONS:
      newState.sentSucessfully = false;
      newState.messages = [];
      return newState;
    default:
      return state;
  }
}

function submitError(messages) {
  return {
    type: ERROR_ON_SUBMIT,
    messages,
  };
}

function sentSucessfully() {
  return { type: SENT_SUCESSFULLY };
}

function isFetching(boolean) {
  return {
    type: IS_FETCHING,
    boolean,
  };
}
function hideNotifications() {
  return {
    type: HIDE_NOTIFICATIONS,
  };
}

export function changeProfileInfo(info) {
  return (dispatch) => {
    dispatch(isFetching(true));
    DAL.settings
      .changeProfileInfo(info)
      .then((res) => {
        if (res.resultCode === 0) {
          dispatch(sentSucessfully());
        } else dispatch(submitError(res.messages));
      })
      .then(() => {
        dispatch(isFetching(false));
        window.setTimeout(() => dispatch(hideNotifications()), 5500);
      });
  };
}

export default settingsReducer;
