import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Messages from "./components/Messages/Messages";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import FindUsersContainer from "components/FindUsers/FindUsersContainer";

function App(props) {

  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.friendsSection} />
        <div className="app-wrapper-content">
          <Route
            path="/toucan/profile"
            render={() => <Profile state={props.state.profilePage} />}
          />
          <Route
            path="/toucan/messages"
            render={() => <Messages state={props.state.messagesPage} />}
          />
          <Route path="/toucan/users" render={() => <FindUsersContainer />} />
          <Route path="/toucan/news" render={() => <News />} />
          <Route path="/toucan/music" render={() => <Music />} />
          <Route path="/toucan/settings" render={() => <Settings />} />
        </div>
      </div>
  );
}

export default App;
