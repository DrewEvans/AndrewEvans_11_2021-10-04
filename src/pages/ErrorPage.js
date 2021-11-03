import { NavHeader } from "../components";
import { NavLink } from "react-router-dom";
import "../styles/error.scss";
import FooterPage from "../components/PageFooter";
import React from "react";

class ErrorPage extends React.Component {
  render() {
    return (
      <div className='error-container'>
        <NavHeader />
        <h2 className='error-code'>404</h2>
        <h2 className='error-msg'>
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <NavLink to='/' style={{ textDecorationColor: "#ff6060" }}>
          <span>Retourner sur la page d’accueil</span>
        </NavLink>
        <FooterPage />
      </div>
    );
  }
}

export default ErrorPage;
