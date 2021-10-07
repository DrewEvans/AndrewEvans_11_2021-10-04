import { useState } from "react";
import Banner from "../images/about-backdrop.png";
import { NavHeader, PageFooter } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [openDialog1, setOpenDialog1] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);
  const [openDialog3, setOpenDialog3] = useState(false);
  const [openDialog4, setOpenDialog4] = useState(false);

  const angleUp = <FontAwesomeIcon icon={faAngleUp} />;
  const angleDown = <FontAwesomeIcon icon={faAngleDown} />;

  return (
    <>
      <NavHeader />
      <div className='banner-container'>
        <img src={Banner} alt='broken' />
      </div>
      <div
        onClick={() =>
          openDialog1 ? setOpenDialog1(false) : setOpenDialog1(true)
        }>
        Fiabilité
        {!openDialog1 && <span>{angleDown}</span>}
        {openDialog1 && <span>{angleUp}</span>}
        {openDialog1 ? (
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        ) : null}
      </div>

      <div
        onClick={() =>
          openDialog2 ? setOpenDialog2(false) : setOpenDialog2(true)
        }>
        Respect
        {!openDialog2 && <span>{angleDown}</span>}
        {openDialog2 && <span>{angleUp}</span>}
        {openDialog2 ? (
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        ) : null}
      </div>

      <div
        onClick={() =>
          openDialog3 ? setOpenDialog3(false) : setOpenDialog3(true)
        }>
        Service
        {!openDialog3 && <span>{angleDown}</span>}
        {openDialog3 && <span>{angleUp}</span>}
        {openDialog3 ? (
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        ) : null}
      </div>

      <div
        onClick={() =>
          openDialog4 ? setOpenDialog4(false) : setOpenDialog4(true)
        }>
        Sécurité
        {!openDialog4 && <span>{angleDown}</span>}
        {openDialog4 && <span>{angleUp}</span>}
        {openDialog4 ? (
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        ) : null}
      </div>
      <PageFooter />
    </>
  );
};
export default About;
