import Banner from "../images/home-backdrop.jpg";
import "../styles/componentStyles/banner.scss";
import React from "react";

class MainBanner extends React.Component {
	render() {
		return (
			<div className='banner-container'>
				<img src={Banner} alt='coastal-banner' />
				<span>Chez vous, partout et ailleurs</span>
			</div>
		);
	}
}

export default MainBanner;
