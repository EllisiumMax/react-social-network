import { connect } from "react-redux";
import { compose } from "redux";
import {
  updateDialogsTempText,
  sendMessage,
} from "redux/messagesReducer";
import Chat from "./Chat";


function mapStateToProps(state) {
  return {
    messagesPage: state.messagesPage,
  };
}

export default compose(connect(mapStateToProps, {updateDialogsTempText, sendMessage}))(Chat);
