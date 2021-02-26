import { connect } from "react-redux";
import { updateText, addPost } from "redux/profileReducer";
import CreatePost from "./CreatePost";

const CreatePostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);

function mapStateToProps(state) {
  return {
    profilePage: state.profilePage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    savePost: () => dispatch(addPost()),
    readSendText: (text) => dispatch(updateText(text)),
  };
}

export default CreatePostContainer;
