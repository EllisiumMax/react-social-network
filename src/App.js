import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "components/Users/UsersContainer";
import ProfileContainer from "components/Profile/ProfileContainer";
import LoginWindow from "components/LoginWindow/LoginWindow";
import MessagesContainer from "components/Messages/MessagesContainer";
import { connect } from "react-redux";
import Loader from "components/COMMON/Loader/Loader";
import { initializeApp } from "redux/appReducer";

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
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/messages" render={() => <MessagesContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={() => <LoginWindow />} />
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
