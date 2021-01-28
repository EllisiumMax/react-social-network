import MyPosts from './MyPosts/MyPosts';
import c from './profile.module.scss';
import ProfileBackground from '../profile/profileImg/profileImg';

function Profile() {
  return (
  <main className={c.profile}>
    <ProfileBackground />
    Profile Content
    <MyPosts />
    </main>
  );
}

export default Profile;
