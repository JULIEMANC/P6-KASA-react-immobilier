import React, { useState } from "react";

const Slides = ({ alt, pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
      <div className="slider">
        {pictures?.length > 1 && (
          <>
            <button className="prev carouselButton" onClick={prevSlide}>
              <img alt="flèche prev" className="arrow" src="/assets/logo/Vector.png" />
            </button>
            <div className="photo-number">
               { `${currentIndex +1}/${pictures.length}`}
            </div>
            <button className="next carouselButton" onClick={nextSlide}>
              <img alt="flèche next" className="arrow" src="/assets/logo/VectorLeft.png" />
            </button>
          </>
        )}
        {pictures?.map((picture, index) => (
          <div className="carousselContent"
            key={index}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            <img className="slides" src={picture} alt={alt} />
          </div>
        ))}
      </div>
  );
};

export default Slides;
