import c from "./MyPosts.module.scss";
import Post from "./post/post";

function MyPosts() {
  return (
    <div>
      <Post
        imgLink="https://mk0nationaltodayijln.kinstacdn.com/wp-content/uploads/2020/02/doggy-date-night-360x360.jpg"
        date="29.01.2020 14:59"
        message="Hello, world!"
        likesAmmount="2673"
      />
      <Post
        imgLink="https://www.dogstrust.org.uk/sponsor/_dogs/bubba-assets/v800_bubba1.jpg"
        date="30.01.2020 15:49"
        message="Hello! React! Hello! React! Hello! React! Hello!"
        likesAmmount="540"
      />
      <Post
        imgLink="https://www.carefordogs.org/site/assets/files/1294/piglet_018d-7610-2.720x720.jpg"
        date="30.01.2020 17:24"
        message="Hello!"
        likesAmmount="567"
      />
    </div>
  );
}

export default MyPosts;
