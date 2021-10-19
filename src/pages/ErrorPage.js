import { NavHeader } from "../components";
import { NavLink } from "react-router-dom";
import "../styles/error.scss";

const ErrorPage = () => {
  return (
    <footer className='error-container'>
      <NavHeader />
      <h2 className='error-code'>404</h2>
      <h2 className='error-msg'>
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <NavLink to='/'>
        <span>Retourner sur la page d’accueil</span>
      </NavLink>
    </footer>
  );
};

export default ErrorPage;
