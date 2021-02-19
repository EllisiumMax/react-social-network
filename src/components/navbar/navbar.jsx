import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import c from './Navbar.module.scss';

function Navbar(props) {
  return (
    <div className={c.container}>
    <nav className={c.nav}>
      <NavLink to='/toucan/profile' activeClassName={c.active}>Profile</NavLink>
      <NavLink to='/toucan/messages' activeClassName={c.active}>Messages</NavLink>
      <NavLink to='/toucan/find' activeClassName={c.active}>Find Users</NavLink>
      <NavLink to='/toucan/news' activeClassName={c.active}>News</NavLink>
      <NavLink to='/toucan/music' activeClassName={c.active}>Music</NavLink>
      <NavLink to='/toucan/settings' activeClassName={c.active}>Settings</NavLink>
    </nav>
    <Friends state={props.state} />
    </div>

  );
}

export default Navbar;
