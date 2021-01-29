import c from "./AddPost.module.scss";

function AddPost() {
  return (
    <div>
        <form action="" className={c.postForm}>
            <h3>Enter your message: </h3>
      <textarea
        name="post"
        maxLength="500"
        placeholder="Maximum length 500 symbols."
        required
        spellcheck="true"

      ></textarea>
      <button>POST</button>
      </form>
    </div>
  );
}

export default AddPost;
