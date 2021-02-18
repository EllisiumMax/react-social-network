import c from "./CreatePost.module.scss";
import React from "react";
import Post from "./Post/Post";

function CreatePost(props) {
  function readSendText(e) {
    let text = e.target.value;
    props.readSendText(text);
  }
  function onPost(e) {
    props.savePost();
  }

  const userPosts = props.profilePage.posts.map((post) => (
    <Post
      imgLink={post.imgLink}
      date={post.date}
      message={post.text}
      likes={post.likes}
    />
  ));

  return (
    <div>
      <div className={c.postForm}>
        <h3>Enter your message: </h3>
        <textarea
          name="post"
          maxLength="500"
          placeholder="Maximum length 500 symbols."
          spellCheck="true"
          onChange={readSendText}
          value={props.profilePage.tempText}
        />
        <button onClick={onPost}>POST</button>
      </div>
      <div>{userPosts}</div>;
    </div>
  );
}

export default CreatePost;
