import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "components/Users/UsersContainer";
import Loader from "./images/loader.svg";
import ProfileContainer from "components/Profile/ProfileContainer";
import LoginWindow from "components/LoginWindow/LoginWindow";
import MessagesContainer from "components/Messages/MessagesContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <img src={Loader} style={{ display: "none" }} /> {/* for preloading of Loader image into cache */}
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/profile/:userId?"
          render={() => <ProfileContainer />}
        />
        <Route
          path="/messages"
          render={() => <MessagesContainer />}
        />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/login" render={() => <LoginWindow />} />
      </div>
    </div>
  );
}

export default App;
