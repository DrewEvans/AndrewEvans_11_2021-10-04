import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const Carousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

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
      <div>
        <span onClick={prevSlide}>Click Me</span>
        <img src={pictures[current]} alt={altText} />
        <span onClick={nextSlide}>Click Me</span>
      </div>
    </>
  );
};

export default Carousel;
