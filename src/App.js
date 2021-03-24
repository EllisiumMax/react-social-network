import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import MessagesContainer from "components/Messages/MessagesContainer";
import { connect } from "react-redux";
import Loader from "components/COMMON/Loader/Loader";
import { initializeApp } from "redux/appReducer";
import withSuspense from "hoc/withSuspense";

const UsersContainer = React.lazy(() =>
  import("components/Users/UsersContainer")
);
const LoginWindow = React.lazy(() =>
  import("components/LoginWindow/LoginWindow")
);
const ProfileContainer = React.lazy(() =>
  import("components/Profile/ProfileContainer")
);
const Settings = React.lazy(() => import("./components/Settings/Settings"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.appReady) return <Loader />;
    return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/profile/:userId?"
            render={() => withSuspense(ProfileContainer)}
          />
          <Route path="/messages" render={() => <MessagesContainer />} />
          <Route path="/users" render={() => withSuspense(UsersContainer)} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => withSuspense(Settings)} />
          <Route path="/login" render={() => withSuspense(LoginWindow)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appReady: state.app.appReady,
  };
};

export default connect(mapStateToProps, { initializeApp })(App);
