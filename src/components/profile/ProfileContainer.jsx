import axios from "axios";
import Loader from "components/COMMON/Loader/Loader";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  addPost,
  requestIsFetching,
  setProfileInfo,
  updateText,
} from "redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.requestIsFetching(true);
    let userID = this.props.match.params.userId;
    if (!userID) userID = 15092;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
      .then((result) => {
        this.props.setProfileInfo(result.data);
        this.props.requestIsFetching(false);
      });
  }
  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
        <div>
          <Profile {...this.props} />
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.profilePage };
}

export default connect(mapStateToProps, {
  addPost,
  updateText,
  setProfileInfo,
  requestIsFetching,
})(withRouter(ProfileContainer));