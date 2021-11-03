import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/componentStyles/equipmentDropdown.scss";

export type openDialogProps = { label?: Boolean };
export type openDialogState = { state: false };
class ApartmentEquipment extends React.Component {
	state: openDialogState = {
		state: false,
	};

	render() {
		let { openDialog } = this.state;
		const { equipments } = this.props;

		// const [openDialog, setOpenDialog] = useState(false);
		const angleUp = <FontAwesomeIcon icon={faAngleUp} />;
		const angleDown = <FontAwesomeIcon icon={faAngleDown} />;

		return (
			<>
				<div className='equipment-dropdown'>
					<div
						className='button'
						onClick={() =>
							openDialog
								? (openDialog = false)
								: (openDialog = true)
						}
					>
						Équipements
						{!openDialog && <span>{angleDown}</span>}
						{openDialog && <span>{angleUp}</span>}
					</div>
					{openDialog ? (
						<ul
							className='open-dialog'
							onClick={() =>
								openDialog
									? (openDialog = false)
									: (openDialog = true)
							}
						>
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
