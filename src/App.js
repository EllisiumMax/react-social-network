import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MessagesContainer from "components/Messages/MessagesContainer";
import { connect } from "react-redux";
import Loader from "components/COMMON/Loader/Loader";
import { initializeApp } from "redux/appReducer";
import withSuspense from "hoc/withSuspense";
import Page404 from "components/Page_404/Page_404";

const UsersContainer = React.lazy(() =>
  import("components/Users/UsersContainer")
);
const LoginWindow = React.lazy(() =>
  import("components/LoginWindow/LoginWindow")
);
const ProfileContainer = React.lazy(() =>
  import("components/Profile/ProfileContainer")
);
const SettingsContainer = React.lazy(() =>
  import("./components/Settings/SettingsContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.appReady) return <Loader fullscreen={true} />;
    return (
      <BrowserRouter basename="/toucan/">
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Switch>
              <Route exact path="/">
                <Redirect to="/profile" />
              </Route>
              <Route
                path="/profile/:userId?"
                render={() => withSuspense(ProfileContainer)}
              />
              <Route
                path="/messages/:userId?"
                render={() => <MessagesContainer />}
              />
              <Route
                path="/users"
                render={() => withSuspense(UsersContainer)}
              />
              <Route
                path="/settings"
                render={() => withSuspense(SettingsContainer)}
              />
              <Route path="/login" render={() => withSuspense(LoginWindow)} />
              <Route path="*" render={() => <Page404 />} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appReady: state.app.appReady,
  };
};

export default connect(mapStateToProps, { initializeApp })(App);
