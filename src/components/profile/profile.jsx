import AddPost from "./AddPost/AddPost";
import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
  return (
    <main className='app-wrapper-content'>
      <ProfileInfo
        backgroundImg="https://wallpapercave.com/wp/wp3973340.jpg"
        userPhoto="https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg"
        userName="Khaiuk Maksym"
        userAge="31"
        livingAt="Odessa, Ukraine"
        workingAt="NoWhere Inc."
      />
      <AddPost />
      <MyPosts />
    </main>
  );
}

export default Profile;
