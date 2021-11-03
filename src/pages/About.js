import React, { useState } from "react";
import Banner from "../images/about-backdrop.png";
import { NavHeader } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/about.scss";
import FooterPage from "../components/PageFooter";

class About extends React.Component {
  // const [openDialog1, setOpenDialog1] = useState(false);
  // const [openDialog2, setOpenDialog2] = useState(false);
  // const [openDialog3, setOpenDialog3] = useState(false);
  // const [openDialog4, setOpenDialog4] = useState(false);

  constructor(props) {
    super(props);
    this.state = {
      openDialog1: false,
      openDialog2: false,
      openDialog3: false,
      openDialog4: false,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
  }

  handleClick1() {
    this.setState((prevState) => ({
      openDialog1: !prevState.openDialog1,
    }));
  }
  handleClick2() {
    this.setState((prevState) => ({
      openDialog2: !prevState.openDialog2,
    }));
  }
  handleClick3() {
    this.setState((prevState) => ({
      openDialog3: !prevState.openDialog3,
    }));
  }
  handleClick4() {
    this.setState((prevState) => ({
      openDialog4: !prevState.openDialog4,
    }));
  }

  render() {
    const angleUp = <FontAwesomeIcon icon={faAngleUp} />;
    const angleDown = <FontAwesomeIcon icon={faAngleDown} />;
    const { openDialog1, openDialog2, openDialog3, openDialog4 } = this.state;
    return (
      <div className='about-page-container'>
        <NavHeader />
        <div className='banner-container'>
          <img src={Banner} alt='broken' />
        </div>
        <div className='about-dropdown-container'>
          <div className='dropdown-container'>
            <div className='btn-header' onClick={this.handleClick1}>
              <h3>Fiabilité</h3>
              {!openDialog1 && <span>{angleDown}</span>}
              {openDialog1 && <span>{angleUp}</span>}
            </div>
            {openDialog1 ? (
              <p className='dialog-box' onClick={this.handleClick1}>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </p>
            ) : null}
          </div>
          <div className='dropdown-container'>
            <div className='btn-header' onClick={this.handleClick2}>
              <h3>Respect</h3>
              {!openDialog2 && <span>{angleDown}</span>}
              {openDialog2 && <span>{angleUp}</span>}
            </div>
            {openDialog2 ? (
              <p className='dialog-box' onClick={this.handleClick2}>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            ) : null}
          </div>
          <div className='dropdown-container'>
            <div className='btn-header' onClick={this.handleClick3}>
              <h3>Service</h3>
              {!openDialog3 && <span>{angleDown}</span>}
              {openDialog3 && <span>{angleUp}</span>}
            </div>
            {openDialog3 ? (
              <p className='dialog-box' onClick={this.handleClick3}>
                Nos équipes se tiennent à votre disposition pour vous fournir
                une expérience parfaite. N'hésitez pas à nous contacter si vous
                avez la moindre question.
              </p>
            ) : null}
          </div>
          <div className='dropdown-container'>
            <div className='btn-header' onClick={this.handleClick4}>
              <h3>Sécurité</h3>
              {!openDialog4 && <span>{angleDown}</span>}
              {openDialog4 && <span>{angleUp}</span>}
            </div>
            {openDialog4 ? (
              <p className='dialog-box' onClick={this.handleClick4}>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
              </p>
            ) : null}
          </div>
        </div>
        <FooterPage />
      </div>
    );
  }
}
export default About;
