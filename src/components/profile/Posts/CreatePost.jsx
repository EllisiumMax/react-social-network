import c from "./CreatePost.module.scss";
import React from "react";
import Post from "./Post/Post";
import { Field, Form } from "react-final-form";
import moment from "moment";

function CreatePost(props) {
  const userPosts = props.profilePage.posts.map((post) => (
    <Post
      key={post.id}
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
        <Form
          onSubmit={(obj) => {
            if (obj.post && obj.post.length <= 500) {
              const timeStamp = moment().format("MM.DD.YY, HH:mm:ss");
              props.addPost(obj.post, timeStamp);
            }
          }}
          validate={() => {}}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                component="textarea"
                name="post"
                maxLength={500}
                placeholder="Maximum length 500 symbols."
                spellCheck="true"
              />
              <button>POST</button>
            </form>
          )}
        />
      </div>
      <div>{userPosts}</div>;
    </div>
  );
}

export default CreatePost;
