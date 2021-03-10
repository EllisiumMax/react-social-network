import scss from "./CreatePost.module.scss";
import React from "react";
import Post from "./Post/Post";
import { Field, Form } from "react-final-form";
import moment from "moment";
import { maxLength } from "utils/forms/fieldValidator";
import { TextArea } from "utils/forms/fieldComponents";

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

  const maxLength500 = maxLength(500);

  const PostInput = () => (
    <div className={scss.postForm}>
      <h3>Enter your message: </h3>
      <Form
        onSubmit={(obj, form) => {
          const timeStamp = moment().format("MM.DD.YY, HH:mm:ss");
          if (obj.post) {
            props.addPost(obj.post, timeStamp);
            form.reset();
          }
        }}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <Field component={TextArea} name="post" validate={maxLength500} />
            <button type="submit" disabled={submitting || pristine}>
              POST
            </button>
          </form>
        )}
      />
    </div>
  );

  return (
    <div>
      <PostInput />
      <div>{userPosts}</div>;
    </div>
  );
}

export default CreatePost;
