import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div className="app-wrapper-content">
      <ProfileInfo
        {...props.profileInfo}
        setStatusRequest={props.setStatusRequest}
        status={props.status}
        loggedUserId={props.id}
        uploadPhoto={props.uploadPhoto}
        editMode={props.editMode}
      />
    </div>
  );
}

export default Profile;
