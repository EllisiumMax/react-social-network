import { connect } from "react-redux";
import { addPost } from "redux/profileReducer";
import CreatePost from "./CreatePost";

const CreatePostContainer = connect(mapStateToProps, { addPost })(CreatePost);

function mapStateToProps(state) {
  return {
    profilePage: state.profilePage,
  };
}

export default CreatePostContainer;
