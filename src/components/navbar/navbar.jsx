import React from "react";
import { NavLink } from "react-router-dom";
import scss from "./Navbar.module.scss";

function Navbar() {
  return (
    <div className={scss.container}>
      <nav className={scss.nav}>
        <NavLink to="/profile" activeClassName={scss.active}>
          Profile
        </NavLink>
        <NavLink to="/messages" activeClassName={scss.active}>
          Messages
        </NavLink>
        <NavLink to="/users" activeClassName={scss.active}>
          Users
        </NavLink>
        <NavLink to="/settings" activeClassName={scss.active}>
          Settings
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
