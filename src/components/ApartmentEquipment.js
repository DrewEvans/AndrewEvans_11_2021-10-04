import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/componentStyles/equipmentDropdown.scss";

const ApartmentEquipment = ({ equipments }) => {
  console.log(equipments);

  const [openDialog, setOpenDialog] = useState(false);
  const angleUp = <FontAwesomeIcon icon={faAngleUp} />;
  const angleDown = <FontAwesomeIcon icon={faAngleDown} />;

  return (
    <>
      <div className='equipment-dropdown'>
        <div
          className='button'
          onClick={() =>
            openDialog ? setOpenDialog(false) : setOpenDialog(true)
          }>
          Équipements
          {!openDialog && <span>{angleDown}</span>}
          {openDialog && <span>{angleUp}</span>}
        </div>
        {openDialog ? (
          <ul
            className='open-dialog'
            onClick={() =>
              openDialog ? setOpenDialog(false) : setOpenDialog(true)
            }>
            {equipments.map((equipment, i) => (
              <li key={`${i}-equip`}>{equipment}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default ApartmentEquipment;
