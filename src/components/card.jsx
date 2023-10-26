import React from "react";
import { Link } from "react-router-dom";

const Card = ({ logement }) => {
  const { id, cover, title } = logement;

  return (
    <article className="card-bloc-item">
      <Link className="card" to={`/housing/${id}`}>
        <div className="card-title">
          <h2>{title}</h2>
        </div>
        <img
          className="photocard"
          src={cover}
          alt={title}
        />
      </Link>
    </article>
  );
};

export default Card;
