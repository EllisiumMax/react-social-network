import { connect } from "react-redux";
import {
  updateDialogsTempTextCreator,
  sendMessageCreator,
} from "redux/messagesReducer";
import ChatInput from "./Chat";

const ChatInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatInput);

function mapStateToProps(state) {
  return {
    messagesPage: state.messagesPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getText: (text) => {
      dispatch(updateDialogsTempTextCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
}

export default ChatInputContainer;
