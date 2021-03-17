import Loader from "components/COMMON/Loader/Loader";
import withAuthRedirect from "hoc/withAuthRedirect";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getUserIdSel } from "redux/loginSelectors";
import {
  addPost,
  loadProfile,
  setStatusRequest,
  statusRequest,
} from "redux/profileReducer";
import {
  getFetchingSel,
  getPostsSel,
  getProfileInfoSel,
  getStatusSel,
} from "redux/profileSelectors";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.loadProfile(this.props.match.params.userId ?? this.props.id);
    this.props.statusRequest(this.props.match.params.userId ?? this.props.id);
  }

  render() {
    return this.props.isFetching ? <Loader /> : <Profile {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    profileInfo: getProfileInfoSel(state),
    posts: getPostsSel(state),
    status: getStatusSel(state),
    isFetching: getFetchingSel(state),
  };
}
export default compose(
  connect(mapStateToProps, {
    loadProfile,
    statusRequest,
    setStatusRequest,
    addPost,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
