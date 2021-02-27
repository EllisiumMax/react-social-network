import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { loginRequest } from "redux/authReducer";
import Login from "./Login";

class LoginContainer extends React.Component {
  loginRequest = () => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.resultCode === 0) {
          this.props.loginRequest(
            res.data.data.login,
            res.data.data.id,
            res.data.data.email,
            res.data.data.messages
          );
        }
      });
  };

  render() {
    return <Login {...this.props} loginRequest={this.loginRequest} />;
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
