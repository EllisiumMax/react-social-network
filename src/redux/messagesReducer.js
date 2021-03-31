import DAL from "api/apiDAL";

const SEND_MESSAGE = "SEND-MESSAGE";
const GET_DIALOGS_LIST = "GET-DIALOGS-LIST";
const GET_MESSAGES = "GET-MESSAGES";
const DELETE_MESSAGE = "DELETE-MESSAGE";
const MARK_SPAM = "MARK-SPAM";

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

    case DELETE_MESSAGE:
      newState.messages.items = newState.messages.items.filter(
        (el) => el.id !== action.messageId
      );
      return newState;

    case MARK_SPAM:
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

function deleteMessageAC(messageId) {
  return {
    type: DELETE_MESSAGE,
    messageId,
  };
}

function markAsSpamAC(messageID) {
  return {
    type: MARK_SPAM,
    messageID,
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

export function sendMessage(userId, text) {
  return (dispatch) => {
    return DAL.messages.sendMessage(userId, text).then((res) => {
      if (res.resultCode === 0) dispatch(sendMessageAC(res.data.message));
    });
  };
}

export function deleteMessage(messageId) {
  return (dispatch) => {
    DAL.messages.deleteMessage(messageId).then((res) => {
      console.log(res);
      if (res.resultCode === 0) dispatch(deleteMessageAC(messageId));
    });
  };
}

export function markAsSpam(messageId) {
  return (dispatch) => {
    DAL.messages.markAsSpam(messageId).then((res) => {
      console.log(res);
      if (res.resultCode === 0) dispatch(markAsSpamAC(messageId));
    });
  };
}

export default messagesReducer;
