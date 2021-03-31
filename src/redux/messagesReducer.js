import DAL from "api/apiDAL";
import _ from "lodash";
import moment from "moment";

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
  targetUserId: null,
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
      if (newState.targetUserId != action.targetUserId) {
        newState.targetUserId = action.targetUserId;
        newState.messages.items = action.messages.items;
      } else {
        newState.messages.items = _.unionWith(
          newState.messages.items,
          action.messages.items,
          (a, b) => (a.id == b.id)
        ).sort((a, b) => moment(a.addedAt) - moment(b.addedAt));
      }

      newState.messages.totalCount = action.messages.totalCount;

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

function getMessagesAC(messages, targetUserId) {
  return {
    type: GET_MESSAGES,
    messages,
    targetUserId,
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

export function getMessages(id, page, ammount) {
  return (dispatch) => {
    return DAL.messages
      .getMessages(id, page, ammount)
      .then((res) => dispatch(getMessagesAC(res, id)));
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
