import DAL from "api/apiDAL";

const initialState = {
};

function settingsReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    default:
      return state;
  }
}


export function changeProfileInfo(info) {
  return (dispatch) =>
    DAL.settings.changeProfileInfo(info).then((res) => console.log(res));
}

export default settingsReducer;
