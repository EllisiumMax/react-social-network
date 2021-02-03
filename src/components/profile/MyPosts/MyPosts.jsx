import c from "./MyPosts.module.scss";
import Post from "./Post/Post";

function MyPosts(props) {
  const userPosts = props.posts.map((post) => (
    <Post
      imgLink={post.imgLink}
      date={post.date}
      message={post.text}
      likes={post.likes}
    />
  ));
  return (
    <div>
      {userPosts};
     </div>
  );
}

export default MyPosts;
