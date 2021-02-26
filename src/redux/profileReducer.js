const ADD_POST = "ADD-POST";
const GET_POST_MESSAGE = "GET-POST-MESSAGE";

const initialState = {
  profileInfo: {
    "aboutMe": "я круто чувак 1001%",
    "contacts": {
      "facebook": "facebook.com",
      "website": null,
      "vk": "vk.com/dimych",
      "twitter": "https://twitter.com/@sdf",
      "instagram": "instagra.com/sds",
      "youtube": null,
      "github": "github.com",
      "mainLink": null
    },
    "lookingForAJob": true,
    "lookingForAJobDescription": "не ищу, а дурачусь",
    "fullName": "samurai dimych",
    "userId": 2,
    "photos": {
      "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
      "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
    }
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
  let newState = {...state};
  newState.profileInfo = {...state.profileInfo};
  newState.posts = [...state.posts];

  switch (action.type) {
    case "ADD-POST": {
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
      newState.tempText = action.text;
      return newState;
    }
    case "SET-PROFILE-INFO": {
      newState.profileInfo = action.profileInfo;
      return newState;
    }
    default:
      return state;
  }
}

export function addPost() {
  return {
    type: ADD_POST,
  };
}

export function updateText(inputText) {
  return {
    type: GET_POST_MESSAGE,
    text: inputText,
  };
}

export function setProfileInfo(profileInfo) {
  return {
    type: "SET-PROFILE-INFO",
    profileInfo: profileInfo
  }
}

export default profileReducer;
