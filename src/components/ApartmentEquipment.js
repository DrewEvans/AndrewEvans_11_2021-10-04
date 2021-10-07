import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ApartmentEquipment = ({ equipments }) => {
  console.log(equipments);

  const [openDialog, setOpenDialog] = useState(false);
  const angleUp = <FontAwesomeIcon icon={faAngleUp} />;
  const angleDown = <FontAwesomeIcon icon={faAngleDown} />;

  return (
    <>
      <div
        onClick={() =>
          openDialog ? setOpenDialog(false) : setOpenDialog(true)
        }>
        Équipements
        {!openDialog && <span>{angleDown}</span>}
        {openDialog && <span>{angleUp}</span>}
        {openDialog ? (
          <ul>
            {equipments.map((equipment, i) => (
              <li key={i}>{equipment}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default ApartmentEquipment;
