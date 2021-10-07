import { NavLink } from "react-router-dom";
import Logo from "../images/LOGO.svg";
import "../styles/componentStyles/header.scss";

const NavHeader = () => {
  return (
    <div className='nav-header'>
      <NavLink to='/'>
        <img src={Logo} />
      </NavLink>
      <div className='links-container'>
        <NavLink style={{ textDecoration: "none" }} to='/'>
          <h2>Accueil</h2>
        </NavLink>

        <NavLink style={{ textDecoration: "none" }} to='/about'>
          <h2>A Propos</h2>
        </NavLink>
      </div>
    </div>
  );
};

export default NavHeader;
