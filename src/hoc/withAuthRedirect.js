import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function withAuthRedirect(Component) {
  class AuthComponent extends React.Component {
    render() {
      if (!this.props.isLogged) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }

  return connect(mapStateToProps, {})(AuthComponent);
}

function mapStateToProps(state) {
  return {
    isLogged: state.auth.isLogged,
    id: state.auth.id,
  };
}

export default withAuthRedirect;
