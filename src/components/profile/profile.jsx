import React from "react";
import AddPost from "./AddPost/AddPost";
import MyPosts from "./MyPosts/MyPosts";
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
      <AddPost tempText={props.state.tempText} dispatch={props.dispatch}/>
      <MyPosts posts={props.state.posts} />
    </main>
  );
}

export default Profile;
