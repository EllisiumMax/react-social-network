import Loader from "components/COMMON/Loader/Loader";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  getUsers,
  loadPage,
  loadNextPage,
  loadPrevPage,
  subscribeRequest,
  unSubscribeRequest,
} from "redux/usersReducer";
import Users from "./Users";

class UsersAPIreq extends React.Component {
  componentDidMount = () => {
    this.props.getUsers(this.props.currentPage, this.props.usersPerPage);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
        <Users {...this.props} users={this.props.users} />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount,
    usersPerPage: state.usersPage.usersPerPage,
    isFetching: state.usersPage.isFetching,
    currentRequests: state.usersPage.currentRequests,
  };
}

export default compose(connect(mapStateToProps, {
  getUsers,
  loadPage,
  loadNextPage,
  loadPrevPage,
  subscribeRequest,
  unSubscribeRequest,
}))(UsersAPIreq);
