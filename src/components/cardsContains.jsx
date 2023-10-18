import logements from "../fixture/logements.json";

const CardsContains = () => {
  return (
    <div className="card">
      {logements.map((logement, index) => (
        <div key={index}>
          <img className="photocard" src={logement.cover} alt={logement.title} />
          <h2>{logement.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default CardsContains;
