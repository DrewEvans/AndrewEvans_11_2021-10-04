import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/componentStyles/descriptionDropdown.scss";

const ApartmentDescription = ({ description }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const angleUp = <FontAwesomeIcon icon={faAngleUp} />;
  const angleDown = <FontAwesomeIcon icon={faAngleDown} />;

  console.log(openDialog);

  return (
    <>
      <div className='description-dropdown'>
        <div
          className='button'
          onClick={() =>
            openDialog ? setOpenDialog(false) : setOpenDialog(true)
          }>
          Description
          {!openDialog && <span>{angleDown}</span>}
          {openDialog && <span>{angleUp}</span>}
        </div>
        {openDialog ? <p>{description}</p> : null}
      </div>
    </>
  );
};

export default ApartmentDescription;
