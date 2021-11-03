import { NavLink } from "react-router-dom";
import React from "react";
import "../styles/componentStyles/apartmentCard.scss";

class ApartmentCard extends React.Component {
	render() {
		return (
			<>
				<NavLink
					to={`/appartement/${this.props.id}`}
					style={{ textDecoration: "none" }}
					key={this.props.id}
				>
					<div className='card-container'>
						<img
							src={this.props.cover}
							alt={this.props.cover
								.replaceAll(
									"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/",
									""
								)
								.replaceAll(".jpg", "")
								.replaceAll("_", " ")
								.replaceAll(/([A-Z]+)/g, " $1")
								.replaceAll(/(^\w|\s\w)/g, (m) =>
									m.toUpperCase()
								)}
						/>
						<div className='card-title'>
							<h2>{this.props.title}</h2>
						</div>
					</div>
				</NavLink>
			</>
		);
	}
}
export default ApartmentCard;
