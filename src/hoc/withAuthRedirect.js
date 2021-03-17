import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getisLoggedSel, getUserIdSel } from "redux/loginSelectors";

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
    isLogged: getisLoggedSel(state),
    id: getUserIdSel(state),
  };
}

export default withAuthRedirect;
