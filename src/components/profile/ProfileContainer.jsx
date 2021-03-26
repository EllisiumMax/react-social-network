import Loader from "components/COMMON/Loader/Loader";
import withAuthRedirect from "hoc/withAuthRedirect";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  addPost,
  loadProfile,
  setStatusRequest,
  statusRequest,
  uploadPhoto,
} from "redux/profileReducer";
import {
  getFetchingSel,
  getPostsSel,
  getProfileInfoSel,
  getStatusSel,
} from "redux/profileSelectors";
import Profile from "./Profile";

function ProfileContainer(props) {
  const targetId = props.match.params.userId;
  const [editMode, modifyEditMode] = useState(
    props.id === targetId ? true : false
  );

  useEffect(() => {
    props.loadProfile(targetId ?? props.id);
    props.statusRequest(targetId ?? props.id);

    if (!targetId || props.id == targetId) modifyEditMode(true);
    else modifyEditMode(false);
  }, [props.location.key]);

  return props.isFetching ? (
    <Loader />
  ) : (
    <Profile {...props} editMode={editMode} />
  );
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
    uploadPhoto,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
