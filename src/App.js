import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Diaglos from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.friendsSection}/>
        <div className="app-wrapper-content">
          <Route
            path="/toucan/profile"
            render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>}
          />
          <Route
            path="/toucan/dialogs"
            render={() => <Diaglos state={props.state.messagesPage} />}
          />
          <Route path="/toucan/news" render={() => <News />} />
          <Route path="/toucan/music" render={() => <Music />} />
          <Route path="/toucan/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
