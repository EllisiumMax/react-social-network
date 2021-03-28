import DAL from "api/apiDAL";

const SET_USERS = "SET-USERS";
const SET_SUBSCRIBE = "SET-SUBSCRIBE";
const SET_UN_SUBSCRIBE = "SET-UN-SUBSCRIBE";
const SET_TOTAL_USERS = "SET-TOTAL-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const REQUEST_IS_FETCHING = "REQUEST-IS-FETCHING";
const ADD_FOLLOW_UNFOLLOW_REQUEST = "ADD-FOLLOW-UNFOLLOW-REQUEST";
const REMOVE_FOLLOW_UNFOLLOW_REQUEST = "REMOVE-FOLLOW-UNFOLLOW-REQUEST";

const initialState = {
  users: [],
  totalCount: 0,
  usersPerPage: 8,
  currentPage: 1,
  isFetching: true,
  currentRequests: [],
};

function findUsersReducer(state = initialState, action) {
  let newState = { ...state };
  newState.users = [...state.users];
  newState.currentRequests = [...state.currentRequests];
  switch (action.type) {
    case SET_USERS:
      newState.users = action.users;
      return newState;
    case SET_SUBSCRIBE:
      newState.users.forEach((user) => {
        if (user.id == action.userID) user.followed = true;
      });
      return newState;
    case SET_UN_SUBSCRIBE:
      newState.users.forEach((user) => {
        if (user.id == action.userID) user.followed = false;
      });
      return newState;
    case SET_TOTAL_USERS:
      newState.totalCount = action.totalCount;
      return newState;
    case SET_CURRENT_PAGE:
      newState.currentPage = action.currentPage;
      return newState;
    case REQUEST_IS_FETCHING:
      newState.isFetching = action.isFetching;
      return newState;
    case ADD_FOLLOW_UNFOLLOW_REQUEST:
      newState.currentRequests.push(action.id);
      return newState;
    case REMOVE_FOLLOW_UNFOLLOW_REQUEST:
      newState.currentRequests = newState.currentRequests.filter(
        (id) => id !== action.id
      );
      return newState;
    default:
      return state;
  }
}

export function setUsers(users) {
  return {
    type: SET_USERS,
    users,
  };
}

export function setSubscribe(userID) {
  return {
    type: SET_SUBSCRIBE,
    userID,
  };
}

export function setUnSubscribe(userID) {
  return {
    type: SET_UN_SUBSCRIBE,
    userID,
  };
}

export function setTotalUsers(totalCount) {
  return {
    type: SET_TOTAL_USERS,
    totalCount,
  };
}

export function setCurrentPage(currentPage) {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
}

export function requestIsFetching(boolean) {
  return {
    type: REQUEST_IS_FETCHING,
    isFetching: boolean,
  };
}

export function addFollowUnFollowRequest(id) {
  return {
    type: ADD_FOLLOW_UNFOLLOW_REQUEST,
    id,
  };
}

export function removeFollowUnFollowRequest(id) {
  return {
    type: REMOVE_FOLLOW_UNFOLLOW_REQUEST,
    id,
  };
}

export function getUsers(currentPage, usersPerPage) {
  return (dispatch) => {
    dispatch(requestIsFetching(true));
    DAL.users.getUsers(currentPage, usersPerPage).then((res) => {
      dispatch(requestIsFetching(false));
      dispatch(setUsers(res.items));
      dispatch(setTotalUsers(res.totalCount));
    });
  };
}

export function loadPage(targetPage, currentPage, usersPerPage) {
  return (dispatch) => {
    if (targetPage !== currentPage) {
      dispatch(requestIsFetching(true));
      DAL.users.loadPage(targetPage, usersPerPage).then((res) => {
        dispatch(requestIsFetching(false));
        dispatch(setUsers(res.items));
        dispatch(setTotalUsers(res.totalCount));
      });
      dispatch(setCurrentPage(targetPage));
    }
  };
}

export function loadNextPage(totalCount, usersPerPage, currentPage) {
  return (dispatch) => {
    const numberOfPages = Math.ceil(totalCount / usersPerPage);
    const nextPage = currentPage + 1;
    if (nextPage <= numberOfPages) {
      dispatch(requestIsFetching(true));
      DAL.users.loadNextPage(nextPage, usersPerPage).then((res) => {
        dispatch(requestIsFetching(false));
        dispatch(setUsers(res.items));
        dispatch(setTotalUsers(res.totalCount));
        dispatch(setCurrentPage(nextPage));
      });
    }
  };
}

export function loadPrevPage(currentPage, usersPerPage) {
  return (dispatch) => {
    const prevPage = currentPage - 1;
    if (prevPage >= 1) {
      dispatch(requestIsFetching(true));
      DAL.users.loadPrevPage(prevPage, usersPerPage).then((res) => {
        dispatch(setUsers(res.items));
        dispatch(setTotalUsers(res.totalCount));
        dispatch(requestIsFetching(false));
        dispatch(setCurrentPage(prevPage));
      });
    }
  };
}

export function subscribeRequest(id) {
  return (dispatch) => {
    dispatch(addFollowUnFollowRequest(id));
    DAL.users.subscribeRequest(id).then((res) => {
      if (res.resultCode === 0) dispatch(setSubscribe(id));
      dispatch(removeFollowUnFollowRequest(id));
    });
  };
}

export function unSubscribeRequest(id) {
  return (dispatch) => {
    dispatch(addFollowUnFollowRequest(id));
    DAL.users.uNsubscribeRequest(id).then((res) => {
      if (res.resultCode === 0) dispatch(setUnSubscribe(id));
      dispatch(removeFollowUnFollowRequest(id));
    });
  };
}

export default findUsersReducer;
