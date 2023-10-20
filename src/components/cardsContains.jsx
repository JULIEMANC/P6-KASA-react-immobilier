import { Link } from "react-router-dom";
import logements from "../fixture/logements.json";

const CardsContains = () => {
  return (
    <div className="cards">
      {logements.map((logement, index) => (        
        <Link className="card" key={index} to={`/housing/${logement.id}`}> 
          <img className="photocard" src={logement.cover} alt={logement.title} />
          <h2>{logement.title}</h2>      
        </Link>
      ))}
    </div>
  );
};

export default CardsContains;
