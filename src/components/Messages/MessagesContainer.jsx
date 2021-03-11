import withAuthRedirect from "hoc/withAuthRedirect";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getDialogs, sendMessage } from "redux/messagesReducer";
import { getMessagesSel, getUserListSel } from "redux/messagesSelectors";
import Messages from "./Messages";

class MessagesContainer extends React.Component {
  componentDidMount() {
    this.props.getDialogs();
  }
  render() {
    return <Messages {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    userList: getUserListSel(state),
    messages: getMessagesSel(state),
  };
}

export default compose(
  connect(mapStateToProps, { getDialogs, sendMessage }),
  withAuthRedirect
)(MessagesContainer);
