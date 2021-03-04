import DAL from "api/apiDAL";

const ADD_POST = "ADD-POST";
const GET_POST_MESSAGE = "GET-POST-MESSAGE";
const SET_PROFILE_INFO = "SET-PROFILE-INFO";
const GET_STATUS = "GET-STATUS";
const SET_STATUS = "SET-STATUS";
const REQUEST_IS_FETCHING = "REQUEST-IS-FETCHING";

const initialState = {
  profileInfo: {},
  status: "",
  tempText: "",
  posts: [
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",
      date: "03.02.2021 12:41",
      text: "Hello World",
      likes: "25",
      id: 1,
    },
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",
      date: "03.02.2021 12:44",
      text: "Hello React",
      likes: "125",
      id: 2,
    },
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",
      date: "03.02.2021 12:41",
      text: "Hello JavaScript",
      likes: "1125",
      id: 3,
    },
    {
      imgLink:
        "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",
      date: "03.02.2021 12:41",
      text: "Hello Web",
      likes: "23",
      id: 4,
    },
  ],
  isFetching: false,
};

function profileReducer(state = initialState, action) {
  let newState = { ...state };
  newState.profileInfo = { ...state.profileInfo };
  newState.posts = [...state.posts];

  switch (action.type) {
    case ADD_POST: {
      if (newState.tempText) {
        let dateNow = new Date();
        let newPost = {
          imgLink:
            "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",
          date:
            dateNow.toLocaleDateString() + " " + dateNow.toLocaleTimeString(),
          text: newState.tempText,
          likes: "0",
        };
        newState.posts.push(newPost);
        newState.tempText = "";
        return newState;
      }
    }
    case GET_POST_MESSAGE: {
      newState.tempText = action.text;
      return newState;
    }
    case SET_PROFILE_INFO: {
      newState.profileInfo = action.profileInfo;
      return newState;
    }
    case REQUEST_IS_FETCHING: {
      newState.isFetching = action.fetching;
      return newState;
    }
    case GET_STATUS: {
      newState.status = action.status;
      return newState;
    }
    case SET_STATUS: {
      newState.status = action.status;
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
    profileInfo: profileInfo,
  };
}

export function requestIsFetching(boolean) {
  return {
    type: "REQUEST-IS-FETCHING",
    fetching: boolean,
  };
}

export function getStatus(status) {
  return {
    type: GET_STATUS,
    status,
  };
}

export function setStatus(status) {
  return {
    type: SET_STATUS,
    status,
  };
}

export function loadProfile(id) {
  return (dispatch) => {
    dispatch(requestIsFetching(true));
    DAL.profile.loadProfileInfo(id).then((res) => {
      dispatch(setProfileInfo(res));
      dispatch(requestIsFetching(false));
    });
  };
}

export function statusRequest(id) {
  return (dispatch) => {
    DAL.profile.getStatus(id).then((res) => {
      dispatch(getStatus(res));
    });
  };
}

export function setStatusRequest(oldStatus, newStatus) {
  return (dispatch) => {
    if (oldStatus !== newStatus && newStatus !== '' && newStatus.length <= 300) {
      DAL.profile.setStatus(newStatus).then((res) => {
        if (res.resultCode === 0) dispatch(setStatus(newStatus));
      });
    } else dispatch(setStatus(oldStatus));
  };
}

export default profileReducer;
