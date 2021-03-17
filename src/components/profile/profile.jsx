import React from "react";
import CreatePost from "./Posts/CreatePost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <main className="app-wrapper-content">
      <ProfileInfo
        {...props.profileInfo}
        setStatusRequest={props.setStatusRequest}
        status={props.status}
        loggedUserId={props.id}
      />
      <div>
        <CreatePost posts={props.posts} addPost={props.addPost} />
      </div>
    </main>
  );
}

export default Profile;
