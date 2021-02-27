import scss from './Header.module.scss';
import toucanLogo from "../../images/toucan.svg";
import LoginContainer from './Login/LoginContainer';
import React from 'react';


function Header() {
  return (
    <header className={scss.header}>
      <img src={toucanLogo}></img>
      <p>Toucan Social Network</p>
      <LoginContainer />
    </header>
  );
}

export default Header;
