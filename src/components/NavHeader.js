import { NavLink } from "react-router-dom";
import Logo from "../images/LOGO.svg";
import React from "react";
import "../styles/componentStyles/header.scss";

class NavHeader extends React.Component {
	render() {
		return (
			<div className='nav-header'>
				<NavLink to='/'>
					<img src={Logo} alt='Kasa-logo' />
				</NavLink>
				<div className='links-container'>
					<NavLink style={{ textDecoration: "none" }} to='/'>
						<h2>Accueil</h2>
					</NavLink>

					<NavLink style={{ textDecoration: "none" }} to='/about'>
						<h2>A Propos</h2>
					</NavLink>
				</div>
			</div>
		);
	}
}

export default NavHeader;
