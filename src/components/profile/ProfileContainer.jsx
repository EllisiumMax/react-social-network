import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addPost, setProfileInfo, updateText } from "redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userId;
    if (!userID) userID = 15092;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
      .then((result) => {
        this.props.setProfileInfo(result.data);
      });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
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
})(withRouter(ProfileContainer));
