import React from "react";
import { connect } from "react-redux";
import { loginRequest } from "redux/authReducer";
import Login from "./Login";

class LoginContainer extends React.Component {
  componentDidMount() {
    this.props.loginRequest();
  }

  render() {
    return <Login {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isLogged: state.auth.isLogged,
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    messages: state.auth.messages,
    isFetching: state.auth.isFetching,
  };
}

export default connect(mapStateToProps, { loginRequest })(LoginContainer);
