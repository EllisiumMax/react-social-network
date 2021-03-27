import React from "react";
import { connect } from "react-redux";
import { getUserIdSel } from "redux/loginSelectors";
import { changeProfileInfo } from "redux/settingsReducer";
import UserInfo from "./UserInfo/UserInfo";

function SettingsContainer(props) {
  return (
    <div>
      <UserInfo {...props} changeProfileInfo={props.changeProfileInfo} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    id: getUserIdSel(state),
  };
}

export default connect(mapStateToProps, { changeProfileInfo })(
  SettingsContainer
);
