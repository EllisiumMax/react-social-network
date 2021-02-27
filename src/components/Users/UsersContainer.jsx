import DAL from "api/apiDAL";
import axios from "axios";
import Loader from "components/COMMON/Loader/Loader";
import React from "react";
import { connect } from "react-redux";
import {
  getUsers,
  requestIsFetching,
  setCurrentPage,
  setTotalUsers,
  subscribe,
  unSubscribe,
} from "redux/usersReducer";
import Users from "./Users";

class UsersAPIreq extends React.Component {
  componentDidMount = () => {
    this.props.requestIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`,
        {
          withCredentials: true,
        }
      )
      .then((result) => {
        this.props.requestIsFetching(false);
        this.props.getUsers(result.data.items);
        this.props.setTotalUsers(result.data.totalCount);
      });
  };
  loadPage = (page) => {
    if (page !== this.props.currentPage) {
      this.props.requestIsFetching(true);
      DAL.users.loadPage(page, this.props.usersPerPage).then((result) => {
        this.props.requestIsFetching(false);
        this.props.getUsers(result.items);
        this.props.setTotalUsers(result.totalCount);
      });
      this.props.setCurrentPage(page);
    }
  };
  loadNextPage = () => {
    const numberOfPages = Math.ceil(
      this.props.totalCount / this.props.usersPerPage
    );
    const nextPage = this.props.currentPage + 1;
    if (nextPage <= numberOfPages) {
      this.props.requestIsFetching(true);
      DAL.users
        .loadNextPage(nextPage, this.props.usersPerPage)
        .then((result) => {
          this.props.requestIsFetching(false);
          this.props.getUsers(result.items);
          this.props.setTotalUsers(result.totalCount);
          this.props.setCurrentPage(nextPage);
        });
    }
  };
  loadPrevPage = () => {
    const prevPage = this.props.currentPage - 1;
    if (prevPage >= 1) {
      this.props.requestIsFetching(true);
      DAL.users
        .loadPrevPage(prevPage, this.props.usersPerPage)
        .then((result) => {
          this.props.getUsers(result.items);
          this.props.setTotalUsers(result.totalCount);
          this.props.requestIsFetching(false);
          this.props.setCurrentPage(prevPage);
        });
    }
  };
  subscribeRequest = (id) => {
    DAL.users.subscribeRequest(id).then((res) => {
      if (res.resultCode === 0) this.props.subscribe(id);
    });
  };
  uNsubscribeRequest = (id) => {
    DAL.users.uNsubscribeRequest(id).then((res) => {
      if (res.resultCode === 0) this.props.unSubscribe(id);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
        <Users
          {...this.props}
          users={this.props.users}
          loadPage={this.loadPage}
          loadNextPage={this.loadNextPage}
          loadPrevPage={this.loadPrevPage}
          subscribeRequest={this.subscribeRequest}
          uNsubscribeRequest={this.uNsubscribeRequest}
        />
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
  };
}

export default connect(mapStateToProps, {
  getUsers,
  subscribe,
  unSubscribe,
  setTotalUsers,
  setCurrentPage,
  requestIsFetching,
})(UsersAPIreq);
