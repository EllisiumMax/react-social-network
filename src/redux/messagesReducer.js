import DAL from "api/apiDAL";

const SEND_MESSAGE = "SEND-MESSAGE";
const GET_DIALOGS = "GET-DIALOGS";

const initialState = {
  userList: [ ],
  messages: [
    {
      id: "1",
      text: "Hello Alina!",
      timeStamp: "01.02.2021 22:10",
    },
    {
      userName: "Khaiuk Alina",
      id: "2",
      text: "How are you Max?",
      timeStamp: "01.02.2021 22:12",
    },
    {
      id: "1",
      text: "Thank you, I am fine.",
      timeStamp: "01.02.2021 22:12",
    },
    {
      userName: "Khaiuk Alina",
      id: "2",
      text: "Do you want to go for a walk?",
      timeStamp: "01.02.2021 22:14",
    },
    {
      id: "1",
      text: "Sorry, I am busy now, maybe later.",
      timeStamp: "01.02.2021 22:15",
    },
  ],
};

function messagesReducer(state = initialState, action) {
  let newState = {
    ...state,
    userList: [...state.userList],
    messages: [...state.messages],
  };
  switch (action.type) {
    case SEND_MESSAGE:
      const message = {
        id: "7",
        text: action.message,
        timeStamp: action.dateTime,
      };
      newState.messages.push(message);
      return newState;
    case GET_DIALOGS:
      newState.userList = [...action.users];
      return newState;
    default:
      return newState;
  }
}

function getAllDialogsAC(users) {
  return {
    type: GET_DIALOGS,
    users,
  };
}

export function sendMessage(message, dateTime) {
  return {
    type: SEND_MESSAGE,
    message,
    dateTime,
  };
}

export function getDialogs() {
  return (dispatch) => {
    DAL.messages.getAllDialogs().then((res) => {
      console.log(res);
      dispatch(getAllDialogsAC(res));
    });
  };
}

export default messagesReducer;
