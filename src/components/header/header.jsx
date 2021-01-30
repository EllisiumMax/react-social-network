import c from './Header.module.scss';
import toucanLogo from "../../images/toucan.svg";


function Header() {
  return (
    <header className={c.header}>
      <img src={toucanLogo}></img>
      <p>Toucan Social Network</p>
    </header>
  );
}

export default Header;
