import React from "react";
import CreatePostContainer from "./Posts/CreatePostContainer";
import c from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <main className="app-wrapper-content">
      <ProfileInfo {...props.profileInfo} setStatusRequest={props.setStatusRequest} status={props.status} />
      <div>
        <CreatePostContainer />
      </div>
    </main>
  );
}

export default Profile;
