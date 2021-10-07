import { NavLink } from "react-router-dom";
import Logo from "../images/LOGO.svg";

const NavHeader = () => {
  return (
    <div>
      <NavLink to='/'>
        <img src={Logo} />
      </NavLink>

      <NavLink to='/'>
        <h2>Accueil</h2>
      </NavLink>

      <NavLink to='/about'>
        <h2>A Propos</h2>
      </NavLink>
    </div>
  );
};

export default NavHeader;
