import { connect } from "react-redux";
import { getUsersAC, setCurrentPageAC, setTotalUsersAC, subscribeToUserAC, unSubcribeFromUserAC } from "redux/findUsers";
import FindUsers from "./FindUsers";

const FindUsersContainer = connect(
  mapPropsToState,
  mapDispatchToProps
)(FindUsers);

function mapPropsToState(state) {
  return {
    users: state.findUsersPage.users,
    currentPage: state.findUsersPage.currentPage,
    totalCount: state.findUsersPage.totalCount,
    usersPerPage: state.findUsersPage.usersPerPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: (users) => {
      dispatch(getUsersAC(users));
    },
    subscribe: (userID) => {
      dispatch(subscribeToUserAC(userID));
    },
    unSubscribe: (userID) => {
      dispatch(unSubcribeFromUserAC(userID));
    },
    setTotalUsers: (totalCount) => {
      dispatch(setTotalUsersAC(totalCount));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    }
  };
}

export default FindUsersContainer;
