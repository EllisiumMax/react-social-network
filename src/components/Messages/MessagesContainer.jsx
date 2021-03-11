import withAuthRedirect from "hoc/withAuthRedirect";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getDialogs } from "redux/messagesReducer";
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
  return { ...state.messagesPage, isLogged: state.auth.isLogged};
}

export default compose(
  connect(mapStateToProps, { getDialogs }),
  withAuthRedirect
)(MessagesContainer);
