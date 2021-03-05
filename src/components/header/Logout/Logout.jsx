import React from "react";
import { connect } from "react-redux";
import { logout } from "redux/authReducer";
import scss from "./Logout.module.scss";

function LogoutContainer(props) {
  return props.isLogged ? <Logout {...props} /> : null;
}

const Logout = (props) => {
  return (
    <button className={scss.logout} onClick={() => props.logout()}>
      LOG <br/> OUT
    </button>
  );
};

function mapStateToProps(state) {
  return {
    isLogged: state.auth.isLogged,
  };
}

export default connect(mapStateToProps, { logout })(LogoutContainer);
