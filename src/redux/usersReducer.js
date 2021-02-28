const initialState = {
  users: [],
  totalCount: 0,
  usersPerPage: 6,
  currentPage: 1,
  isFetching: true,
  currentRequests: [],
};

function findUsersReducer(state = initialState, action) {
  let newState = { ...state };
  newState.users = [...state.users];
  newState.currentRequests = [...state.currentRequests];
  switch (action.type) {
    case "GET-USERS":
      newState.users = action.users;
      return newState;
    case "SUBSCRIBE":
      newState.users.forEach((user) => {
        if (user.id == action.userID) user.followed = true;
      });
      return newState;
    case "UN-SUBSCRIBE":
      newState.users.forEach((user) => {
        if (user.id == action.userID) user.followed = false;
      });
      return newState;
    case "SET-TOTAL-USERS":
      newState.totalCount = action.totalCount;
      return newState;
    case "SET-CURRENT-PAGE":
      newState.currentPage = action.currentPage;
      return newState;
    case "REQUEST-IS-FETCHING":
      newState.isFetching = action.isFetching;
      return newState;
    case "ADD-FOLLOW-UNFOLLOW-REQUEST":
      newState.currentRequests.push(action.id);
      console.log(newState.currentRequests);
      return newState;
    case "REMOVE-FOLLOW-UNFOLLOW-REQUEST":
      newState.currentRequests = newState.currentRequests.filter((id) => id !== action.id);
      console.log(newState.currentRequests);
      return newState;
    default:
      return state;
  }
}

export function getUsers(users) {
  return {
    type: "GET-USERS",
    users: users,
  };
}

export function subscribe(userID) {
  return {
    type: "SUBSCRIBE",
    userID: userID,
  };
}

export function unSubscribe(userID) {
  return {
    type: "UN-SUBSCRIBE",
    userID: userID,
  };
}

export function setTotalUsers(totalCount) {
  return {
    type: "SET-TOTAL-USERS",
    totalCount: totalCount,
  };
}

export function setCurrentPage(page) {
  return {
    type: "SET-CURRENT-PAGE",
    currentPage: page,
  };
}

export function requestIsFetching(boolean) {
  return {
    type: "REQUEST-IS-FETCHING",
    isFetching: boolean,
  };
}

export function addFollowUnFollowRequest(id) {
  return {
    type: "ADD-FOLLOW-UNFOLLOW-REQUEST",
    id,
  };
}

export function removeFollowUnFollowRequest(id) {
  return {
    type: "REMOVE-FOLLOW-UNFOLLOW-REQUEST",
    id,
  };
}

export default findUsersReducer;
