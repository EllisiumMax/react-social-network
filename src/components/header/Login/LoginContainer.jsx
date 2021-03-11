import React from "react";
import { connect } from "react-redux";
import { authRequest } from "redux/authReducer";
import {
  getIsFetchingSel,
  getisLoggedSel,
  getLogingSel,
} from "redux/loginSelectors";
import Login from "./Login";

class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isLogged: getisLoggedSel(state),
    login: getLogingSel(state),
    isFetching: getIsFetchingSel(state),
  };
}

export default connect(mapStateToProps, { authRequest })(LoginContainer);
