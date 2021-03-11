import React from "react";
import { connect } from "react-redux";
import { logout } from "redux/authReducer";
import { getisLoggedSel } from "redux/loginSelectors";
import scss from "./Logout.module.scss";

function LogoutContainer(props) {
  return props.isLogged ? <Logout {...props} /> : null;
}

const Logout = (props) => {
  return (
    <button className={scss.logout} onClick={() => props.logout()}>
      LOG <br /> OUT
    </button>
  );
};

function mapStateToProps(state) {
  return {
    isLogged: getisLoggedSel(state),
  };
}

export default connect(mapStateToProps, { logout })(LogoutContainer);
