import c from './navbar.module.scss';

function Navbar() {
  return (
    <nav className={c.nav}>
      <a>Profile</a>
      <a>Messages</a>
      <a>News</a>
      <a>Settings</a>
    </nav>
  );
}

export default Navbar;
