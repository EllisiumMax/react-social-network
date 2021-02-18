import React from "react";
import CreatePostContainer from "./Posts/CreatePostContainer";
import c from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <main className="app-wrapper-content">
      <ProfileInfo
        backgroundImg={props.state.profileInfo.backgroundImg}
        userPhoto={props.state.profileInfo.userPhoto}
        userName={props.state.profileInfo.userName}
        userAge={props.state.profileInfo.userAge}
        livingAt={props.state.profileInfo.livingAt}
        workingAt={props.state.profileInfo.workingAt}
      />
      <div>
        <CreatePostContainer />
      </div>
    </main>
  );
}

export default Profile;
