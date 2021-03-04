const GET_MESSAGES_TEMP_TEXT = "GET-MESSAGES-TEMPTEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
  userList: [
    {
      userName: "Khaiuk Maksym",
      id: "1",
      avatarURL:
        "https://www.humanesociety.org/sites/default/files/styles/400x400/public/2019/02/dog-451643.jpg?h=bf654dbc&itok=txM-HxF8",
    },
    {
      userName: "Khaiuk Alina",
      id: "2",
      avatarURL:
        "https://media.newyorker.com/photos/59097268019dfc3494ea24b3/master/pass/Shapiro-Most-Famous-Dog-On-Instagram.jpg",
    },
    {
      userName: "Verestun Sergii",
      id: "3",
      avatarURL:
        "https://pethouse.ua/assets/images/prods/planetdog/0000113643.jpg",
    },
    {
      userName: "Sokolov Anatoliy",
      id: "4",
      avatarURL:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-dog-breeds-lead-1550810849.jpg?crop=0.666xw:1.00xh;0.191xw,0&resize=640:*",
    },
    {
      userName: "Kovalev Alexandr",
      id: "5",
      avatarURL:
        "https://pbs.twimg.com/profile_images/1351720980972933122/I3MnYUdm.jpg",
    },
  ],
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
  tempText: "",
};

function messagesReducer(state = initialState, action) {
  let newState = {
    ...state,
    userList: [...state.userList],
    messages: [...state.messages],
  };
  switch (action.type) {
    case "GET-MESSAGES-TEMPTEXT":
      newState.tempText = action.text;
      return newState;
    case "SEND-MESSAGE":
      if (newState.tempText) {
        const message = {
          id: "7",
          text: newState.tempText,
          timeStamp: "01.02.2021 23:12",
        };
        newState.messages.push(message);
        newState.tempText = "";
        return newState;
      }

    default:
      return newState;
  }
}

export function updateDialogsTempText(inputText) {
  return {
    type: GET_MESSAGES_TEMP_TEXT,
    text: inputText,
  };
}

export function sendMessage() {
  return {
    type: SEND_MESSAGE,
  };
}

export default messagesReducer;
