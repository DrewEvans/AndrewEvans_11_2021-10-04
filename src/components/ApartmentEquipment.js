import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/componentStyles/equipmentDropdown.scss";

class ApartmentEquipment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openDialog: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      openDialog: !prevState.openDialog,
    }));
  }

  render() {
    let { openDialog } = this.state;
    const { equipments } = this.props;
    const angleUp = <FontAwesomeIcon icon={faAngleUp} />;
    const angleDown = <FontAwesomeIcon icon={faAngleDown} />;

    return (
      <>
        <div className='equipment-dropdown'>
          <div className='button' onClick={this.handleClick}>
            Équipements
            {!openDialog && <span>{angleDown}</span>}
            {openDialog && <span>{angleUp}</span>}
          </div>
          {openDialog ? (
            <ul className='open-dialog' onClick={this.handleClick}>
              {equipments.map((equipment, i) => (
                <li key={`${i}-equip`}>{equipment}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </>
    );
  }
}

export default ApartmentEquipment;
