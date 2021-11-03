import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/componentStyles/descriptionDropdown.scss";

class ApartmentDescription extends React.Component {
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
    const { description } = this.props;
    const angleUp = <FontAwesomeIcon icon={faAngleUp} />;
    const angleDown = <FontAwesomeIcon icon={faAngleDown} />;

    return (
      <>
        <div className='description-dropdown'>
          <div className='button' onClick={this.handleClick}>
            Description
            {!openDialog && <span>{angleDown}</span>}
            {openDialog && <span>{angleUp}</span>}
          </div>
          {openDialog ? <p onClick={this.handleClick}>{description}</p> : null}
        </div>
      </>
    );
  }
}

export default ApartmentDescription;
