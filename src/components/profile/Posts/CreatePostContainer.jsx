import { connect } from "react-redux";
import { updateTextCreator, addPostCreator } from "redux/profileReducer";
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
    savePost: () => dispatch(addPostCreator()),
    readSendText: (text) => dispatch(updateTextCreator(text)),
  };
}

export default CreatePostContainer;
