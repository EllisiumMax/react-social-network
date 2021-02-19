import { connect } from "react-redux";
import {
  updateDialogsTempTextCreator,
  sendMessageCreator,
} from "redux/messagesReducer";
import Chat from "./Chat";

const ChatInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);

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
