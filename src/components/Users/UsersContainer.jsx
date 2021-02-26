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
} from "redux/findUsers";
import Users from "./Users";

class UsersAPIreq extends React.Component {
  componentDidMount = () => {
    this.props.requestIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`
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
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPerPage}`
        )
        .then((result) => {
          this.props.requestIsFetching(false);
          this.props.getUsers(result.data.items);
          this.props.setTotalUsers(result.data.totalCount);
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
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${nextPage}&count=${this.props.usersPerPage}`
        )
        .then((result) => {
          this.props.requestIsFetching(false);
          this.props.getUsers(result.data.items);
          this.props.setTotalUsers(result.data.totalCount);
          this.props.setCurrentPage(nextPage);
        });
    }
  };
  loadPrevPage = () => {
    const prevPage = this.props.currentPage - 1;
    if (prevPage >= 1) {
      this.props.requestIsFetching(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${prevPage}&count=${this.props.usersPerPage}`
        )
        .then((result) => {
          this.props.getUsers(result.data.items);
          this.props.setTotalUsers(result.data.totalCount);
          this.props.requestIsFetching(false);
          this.props.setCurrentPage(prevPage);
        });
    }
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
        <Users
          {...this.props}
          loadPage={this.loadPage}
          loadNextPage={this.loadNextPage}
          loadPrevPage={this.loadPrevPage}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.findUsersPage.users,
    currentPage: state.findUsersPage.currentPage,
    totalCount: state.findUsersPage.totalCount,
    usersPerPage: state.findUsersPage.usersPerPage,
    isFetching: state.findUsersPage.isFetching,
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
