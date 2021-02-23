import { act } from "@testing-library/react";

const initialState = {
  users: [],
  totalCount: 0,
  usersPerPage: 6,
  currentPage: 1,
  isFetching: true,
};

function findUsersReducer(state = initialState, action) {
  let newState = { ...state };
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
    default:
      return state;
  }
}

export function getUsersAC(users) {
  return {
    type: "GET-USERS",
    users: users,
  };
}

export function subscribeToUserAC(userID) {
  return {
    type: "SUBSCRIBE",
    userID: userID,
  };
}

export function unSubcribeFromUserAC(userID) {
  return {
    type: "UN-SUBSCRIBE",
    userID: userID,
  };
}

export function setTotalUsersAC(totalCount) {
  return {
    type: "SET-TOTAL-USERS",
    totalCount: totalCount,
  };
}

export function setCurrentPageAC(page) {
  return {
    type: "SET-CURRENT-PAGE",
    currentPage: page,
  };
}

export function requestIsFetchingAC(boolean) {
  return {
    type: "REQUEST-IS-FETCHING",
    isFetching: boolean,
  };
}

export default findUsersReducer;
