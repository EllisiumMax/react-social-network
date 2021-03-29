import scss from "./Header.module.scss";
import toucanLogo from "../../images/toucan.svg";
import LoginContainer from "./Login/LoginContainer";
import React from "react";
import LogoutContainer from "./Logout/Logout";

function Header() {
  return (
    <header className={scss.header}>
      <img src={toucanLogo} alt="toucan"></img>
      <p>Toucan Social Network</p>
      <div className={scss.logInOutWrapper}>
        <LoginContainer className={scss.logIn}/>
        <LogoutContainer className={scss.logOut}/>
      </div>
    </header>
  );
}

export default Header;
