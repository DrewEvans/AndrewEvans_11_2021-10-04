import { NavLink } from "react-router-dom";
import Logo from "../images/LOGO.svg";

const FooterPage = () => {
  return (
    <>
      <div>
        <NavLink to='/'>
          <img src={Logo} alt='Logo' />
        </NavLink>
        <span>© 2020 Kasa. All rights reserved</span>
      </div>
    </>
  );
};
export default FooterPage;
