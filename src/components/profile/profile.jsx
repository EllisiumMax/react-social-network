import AddPost from "./AddPost/AddPost";
import MyPosts from "./MyPosts/MyPosts";
import c from "./profile.module.scss";
import ProfileInfo from "./profileInfo/profileInfo";

function Profile() {
  return (
    <main className={c.profile}>
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
