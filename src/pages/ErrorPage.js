import { NavHeader } from "../components";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <NavHeader />
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to='/'>
        <span>Retourner sur la page d’accueil</span>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
