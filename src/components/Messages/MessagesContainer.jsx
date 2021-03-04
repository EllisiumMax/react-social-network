import withAuthRedirect from "hoc/withAuthRedirect";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Messages from "./Messages";

class MessagesContainer extends React.Component {
  render() {
    return <Messages {...this.props} />;
  }
}

function mapStateToProps(state) {
  return { ...state.messagesPage };
}

export default compose(connect(mapStateToProps, {}), withAuthRedirect)(MessagesContainer);
