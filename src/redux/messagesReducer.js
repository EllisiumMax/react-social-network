import DAL from "api/apiDAL";

const SEND_MESSAGE = "SEND-MESSAGE";
const GET_DIALOGS_LIST = "GET-DIALOGS-LIST";
const GET_MESSAGES = "GET-MESSAGES";
const SET_FRIEND_ID = "SET-FRIEND_ID";

const initialState = {
  userList: [],
  friendId: null,
  messages: {
    items: [],
  },
};

function messagesReducer(state = initialState, action) {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case SET_FRIEND_ID:
      newState.friendId = action.friendId;
      return newState;
    case SEND_MESSAGE:
      newState.messages.items.push(action.message);
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

export function setFriendIdAC(id) {
  return {
    type: SET_FRIEND_ID,
    friendId: id,
  };
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

export function sendMessageAC(message) {
  return {
    type: SEND_MESSAGE,
    message,
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
    DAL.messages.startChating(id).then((res) => {
      if (res.resultCode === 0)
        DAL.messages
          .getMessages(id)
          .then((res) => dispatch(getMessagesAC(res)));
    });
  };
}

export function sendMessage(id, message) {
  return (dispatch) => {
    DAL.messages.sendMessage(id, message).then((res) => {
      dispatch(sendMessageAC(res));
    });
  };
}

export default messagesReducer;
