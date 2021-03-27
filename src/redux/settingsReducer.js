import DAL from "api/apiDAL";

const CHANGE_PROFILE_INFO = "CHANGE-PROFILE-INFO";

const initialState = {
  lookingForAJob: null,
  lookingForAJobDescription: null,
  fullName: null,
  contacts: {
    github: null,
    vk: null,
    facebook: null,
    instagram: null,
    twitter: null,
    website: null,
    youtube: null,
    mainLink: null,
  },
};

function settingsReducer(state = initialState, action) {
  let newState = { ...state };
  newState.contacts = { ...state.contacts };
  switch (action.type) {
    case CHANGE_PROFILE_INFO:
      newState = action.info;
      return newState;
    default:
      return state;
  }
}

function profileInfoChanged(info) {
  return {
    type: CHANGE_PROFILE_INFO,
    info,
  };
}

export function changeProfileInfo(info) {
  return (dispatch) =>
    DAL.settings.changeProfileInfo(info).then((res) => console.log(res));
}

export default settingsReducer;
