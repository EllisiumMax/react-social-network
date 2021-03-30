import DAL from "api/apiDAL";

const SEND_MESSAGE = "SEND-MESSAGE";
const GET_DIALOGS_LIST = "GET-DIALOGS-LIST";
const GET_MESSAGES = "GET-MESSAGES";
const CHECK_IF_VIEWED = "CHECK-IF-VIEWED";

const initialState = {
  userList: [],
  messages: {
    items: [],
  },
};

function messagesReducer(state = initialState, action) {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case SEND_MESSAGE:
      newState.messages.items.push(action.message);
      return newState;
    case CHECK_IF_VIEWED:
      return newState;

    case GET_DIALOGS_LIST:
      newState.userList = [...action.users];
      return newState;
    case GET_MESSAGES:
      newState.messages = action.messages;
      return newState;
    default:
      return newState;
  }
}

function getAllDialogsAC(users) {
  return {
    type: GET_DIALOGS_LIST,
    users,
  };
}

function getMessagesAC(messages) {
  return {
    type: GET_MESSAGES,
    messages,
  };
}

function sendMessageAC(message) {
  return {
    type: SEND_MESSAGE,
    message,
  };
}

function checkIfViewedAC(messageId) {
  return {
    type: CHECK_IF_VIEWED,
    messageId,
  };
}

export function getDialogs() {
  return (dispatch) => {
    DAL.messages.getAllDialogs().then((res) => {
      dispatch(getAllDialogsAC(res));
    });
  };
}

export function getMessages(id) {
  return (dispatch) => {
    return DAL.messages
      .getMessages(id)
      .then((res) => dispatch(getMessagesAC(res)));
  };
}

export function startChating(id) {
  return (dispatch) => {
    return DAL.messages.startChating(id);
  };
}

export function sendMessage(id, message) {
  return (dispatch) => {
    DAL.messages.sendMessage(id, message).then((res) => {
      if (res.resultCode === 0) dispatch(sendMessageAC(res.data.message));
    });
  };
}

export function checkIfViewed(messageId) {
  return (dispatch) => {
    DAL.messages.checkMessageViewed(messageId).then((res) => {});
  };
}

export default messagesReducer;
