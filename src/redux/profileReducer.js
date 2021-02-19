const ADD_POST = "ADD-POST";
const GET_POST_MESSAGE = "GET-POST-MESSAGE";

const initialState = {
  profileInfo: {
    backgroundImg: "https://wallpapercave.com/wp/wp3973340.jpg",
    userPhoto:
      "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",
    userName: "Khaiuk Maksym",
    userAge: "31",
    livingAt: "Odessa, Ukraine",
    workingAt: "NoWhere Inc.",
  },
  tempText: "",
  posts: [
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",
      date: "03.02.2021 12:41",
      text: "Hello World",
      likes: "25",
    },
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",
      date: "03.02.2021 12:44",
      text: "Hello React",
      likes: "125",
    },
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",
      date: "03.02.2021 12:41",
      text: "Hello JavaScript",
      likes: "1125",
    },
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",
      date: "03.02.2021 12:41",
      text: "Hello Web",
      likes: "23",
    },
  ],
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD-POST": {
      let newState = {...state};
      newState.profileInfo = {...state.profileInfo};
      newState.posts = [...state.posts];
      if(newState.tempText) {
        let dateNow = new Date(); 
        let newPost = {
          imgLink:
            "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",
          date: dateNow.toLocaleDateString() + " " + dateNow.toLocaleTimeString(),
          text: newState.tempText,
          likes: "0",
        };
        newState.posts.push(newPost);
        newState.tempText = "";
        return newState;
      }
      
    }
    case "GET-POST-MESSAGE": {
      let newState = {...state };
      newState.tempText = action.text;
      return newState;
    }
    default:
      return state;
  }
}

export function addPostCreator() {
  return {
    type: ADD_POST,
  };
}

export function updateTextCreator(inputText) {
  return {
    type: GET_POST_MESSAGE,
    text: inputText,
  };
}

export default profileReducer;
