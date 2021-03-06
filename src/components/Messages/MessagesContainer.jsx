import withAuthRedirect from "hoc/withAuthRedirect";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import {
  getDialogs,
  getMessages,
  sendMessage,
  deleteMessage,
  startChating,
  markAsSpam,
} from "redux/messagesReducer";
import {
  getMessagesFetchingSel,
  getMessagesSel,
  getUserListSel,
} from "redux/messagesSelectors";
import Messages from "./Messages";
function MessagesContainer(props) {
  let [timer, setTimer] = useState(1);
  let [timerState, setTimerState] = useState(true);

  useEffect(() => {
    props.getDialogs();
    if (props.match.params.userId !== undefined) {
      props.startChating(props.match.params.userId);
      props.getMessages(props.match.params.userId);
    }
  }, []);

  useEffect(() => {
    setTimerState(true);
    let interval = null;
    if (timerState) {
      interval = setInterval(() => {
        setTimer(++timer);
      }, 3000);
    }
    return () => {
      clearInterval(interval);
      setTimerState(false);
    };
  });


  useEffect(() => {
    props.getDialogs();
    if (props.match.params.userId !== undefined) {
      props.getMessages(props.match.params.userId);
    }
  }, [timer]);

  return <Messages {...props} />;
}

function mapStateToProps(state) {
  return {
    userList: getUserListSel(state),
    messages: getMessagesSel(state),
    isFetching: getMessagesFetchingSel(state),
  };
}

export default compose(
  connect(mapStateToProps, {
    getDialogs,
    getMessages,
    sendMessage,
    startChating,
    deleteMessage,
    markAsSpam,
  }),
  withAuthRedirect,
  withRouter
)(MessagesContainer);
