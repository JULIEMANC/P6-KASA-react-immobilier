import logements from "../fixture/logements.json";

const CardsContains = () => {
  return (
    <div className="cards">
      {logements.map((logement, index) => (
        <div className="card" key={index}>
          <img className="photocard" src={logement.cover} alt={logement.title} />
          <h2>{logement.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default CardsContains;
