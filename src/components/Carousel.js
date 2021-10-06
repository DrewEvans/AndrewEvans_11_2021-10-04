import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const leftAngle = <FontAwesomeIcon icon={faAngleLeft} />;
  const rightAngle = <FontAwesomeIcon icon={faAngleRight} />;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const altText = pictures[current]
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
      <section>
        <span className='left-angle' onClick={prevSlide}>
          {leftAngle}
        </span>
        <div className='carousel-img-container'>
          <img
            className='carousel-image'
            src={pictures[current]}
            alt={altText}
          />
        </div>
        <span className='right-angle' onClick={nextSlide}>
          {rightAngle}
        </span>
      </section>
    </>
  );
};

export default Carousel;
