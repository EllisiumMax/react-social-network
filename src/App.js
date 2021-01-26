import './App.scss';
import toucanLogo from './images/toucan.svg';


function App() {
  return (
    <div className="app-wrapper">
<header className="header">
  <img src={toucanLogo}></img>
   <p>Toucan Social Network</p>
</header>
<nav className="nav">
    <a>Profile</a>
    <a>Messages</a>
    <a>News</a>
    <a>Settings</a>
</nav>
<main className="content">
MAIN CONTENT
</main>
</div>
  );
}

export default App;
