import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Messages from "./components/Messages/Messages";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "components/Users/UsersContainer";
import Loader from "./images/loader.svg";
import ProfileContainer from "components/Profile/ProfileContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <img src={Loader} style={{ display: "none" }} /> {/* for preloading of Loader image into cache */}
      <Header />
      <Navbar state={props.state.friendsSection} />
      <div className="app-wrapper-content">
        <Route
          path="/toucan/profile/:userId?"
          render={() => <ProfileContainer />}
        />
        <Route
          path="/toucan/messages"
          render={() => <Messages state={props.state.messagesPage} />}
        />
        <Route path="/toucan/users" render={() => <UsersContainer />} />
        <Route path="/toucan/news" render={() => <News />} />
        <Route path="/toucan/music" render={() => <Music />} />
        <Route path="/toucan/settings" render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
