import React from "react";

const RatingStars = ({ rating }) => {
  const maxRating = 5;
  const getColorForRating = (currentRating) => {
    if (currentRating <= rating) {
      return "#ff6060";
    } else {
      return " #E3E3E3";
    }
  };

  return (
    <div className="rating-stars">
      {Array.from({ length: maxRating }, (_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 14 14"
          fill={getColorForRating(index + 1)}>
          <path
            d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .30.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.80.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.80-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0" />
        </svg>
      ))}
    </div>
  );
};

export default RatingStars;
