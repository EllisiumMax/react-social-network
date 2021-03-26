import Loader from "components/COMMON/Loader/Loader";
import withAuthRedirect from "hoc/withAuthRedirect";
import React, { useEffect } from "react";
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


function ProfileContainer (props) {
  useEffect( () => {
    props.loadProfile(props.match.params.userId ?? props.id);
    props.statusRequest(props.match.params.userId ?? props.id);
  },[props.location.key])

  return props.isFetching ? <Loader /> : <Profile {...props} />;
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
