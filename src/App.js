import "./App.scss";
import Diaglos from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        {/* <Profile /> */}
        <Diaglos />
      </div>
      
    </div>
  );
}

export default App;
