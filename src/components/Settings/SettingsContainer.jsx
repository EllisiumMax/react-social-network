import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserIdSel } from "redux/loginSelectors";
import { loadProfile } from "redux/profileReducer";
import { getProfileInfoSel } from "redux/profileSelectors";
import { changeProfileInfo } from "redux/settingsReducer";
import UserInfo from "./UserInfo/UserInfo";

function SettingsContainer(props) {

  useEffect(() => props.loadProfile(props.id), []);
  return (
    <div>
      <UserInfo {...props} changeProfileInfo={props.changeProfileInfo} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isFetching: state.settingsPage.isFetching,
    messages: state.settingsPage.messages,
    sentSucessfully: state.settingsPage.sentSucessfully,
    profileInfo: getProfileInfoSel(state),
    id: getUserIdSel(state),
  };
}

export default connect(mapStateToProps, { changeProfileInfo, loadProfile })(
  SettingsContainer
);
