import React, { useState } from "react";

const Slides = ({ alt, pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  return (
    <div className="photohousing">
      <div className="slider">
        <button className="prev" onClick={prevSlide}>
        <img alt="flèche prev"src="/assets/logo/Vector.png"/>
        </button>

        {pictures?.map((picture, index) => (
          <div  key={index} style={{ display: index === currentIndex ? "block" : "none" }}>
            <img className="slides"src={picture} alt={alt} />
          </div>
       ) )}

        <button className="next" onClick={nextSlide} >
          <img alt="flèche next"src="/assets/logo/VectorLeft.png"/>
        </button>
      </div>
    </div>
  );
};

export default Slides;