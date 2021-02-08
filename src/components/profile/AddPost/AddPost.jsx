import c from "./AddPost.module.scss";
import React from "react";

function AddPost(props) {
  let newPostElement = React.createRef();

  function readSendText() {
    let textAreaValue = newPostElement.current.value;
    let action = { type: "GET-POST-MESSAGE", text: textAreaValue };
    props.dispatch(action);
  }
  function savePost() {
    props.dispatch({ type: "ADD-POST" });
  }

  return (
    <div>
      <div className={c.postForm}>
        <h3>Enter your message: </h3>
        <textarea
          ref={newPostElement}
          name="post"
          maxLength="500"
          placeholder="Maximum length 500 symbols."
          spellCheck="true"
          onChange={readSendText}
          value={props.tempText}
        />
        <button onClick={savePost}>POST</button>
      </div>
    </div>
  );
}

export default AddPost;
