import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/componentStyles/carousel.scss";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { length: this.props.pictures.length, current: 0 };

    // This binding is necessary to make `this` work in the callback
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  handleLeftClick() {
    this.setState(() => ({
      current:
        this.state.current === this.state.length - 1
          ? 0
          : this.state.current + 1,
    }));
  }
  handleRightClick() {
    this.setState(() => ({
      current:
        this.state.current === this.state.length - 1
          ? 0
          : this.state.current + 1,
    }));
  }

  render() {
    const { pictures } = this.props;
    const leftAngle = <FontAwesomeIcon icon={faAngleLeft} />;
    const rightAngle = <FontAwesomeIcon icon={faAngleRight} />;
    const altTxt = pictures[this.state.current]
      .replaceAll(
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/",
        ""
      )
      .replaceAll(".jpg", "")
      .replaceAll("_", " ")
      .replaceAll(/([A-Z]+)/g, " $1")
      .replaceAll(/(^\w|\s\w)/g, (m) => m.toUpperCase());

    return (
      <>
        <div className='carousel-container'>
          {pictures.length > 1 ? (
            <span className='left-angle' onClick={this.handleLeftClick}>
              {leftAngle}
            </span>
          ) : null}

          <img
            className='carousel-image'
            src={pictures[this.state.current]}
            alt={altTxt}
          />

          {pictures.length > 1 ? (
            <span className='right-angle' onClick={this.handleRightClick}>
              {rightAngle}
            </span>
          ) : null}
        </div>
      </>
    );
  }
}

export default Carousel;
