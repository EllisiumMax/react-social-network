import { connect } from "react-redux";
import { getUsersAC, subscribeToUserAC, unSubcribeFromUserAC } from "redux/findUsers";
import FindUsers from "./FindUsers";

const FindUsersContainer = connect(
  mapPropsToState,
  mapDispatchToProps
)(FindUsers);

function mapPropsToState(state) {
  return {
    findUsersPage: state.findUsersPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => {
      dispatch(getUsersAC());
    },
    subscribe: (userID) => {
      dispatch(subscribeToUserAC(userID));
    },
    unSubscribe: (userID) => {
      dispatch(unSubcribeFromUserAC(userID));
    },
  };
}

export default FindUsersContainer;
