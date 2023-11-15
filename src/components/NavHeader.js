import { NavLink } from "react-router-dom";
import Logo from "../images/LOGO.svg";
import "../styles/componentStyles/header.scss";

const NavHeader = () => {
  return (
    <div className='nav-header'>
      <NavLink to='/'>
        <img src={Logo} alt='Kasa-logo' />
      </NavLink>
      <ul className='links-container'>
        <NavLink style={{ textDecoration: "none" }} to='/'>
          <li>Accueil</li>
        </NavLink>

        <NavLink style={{ textDecoration: "none" }} to='/about'>
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavHeader;
