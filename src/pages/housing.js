import Layout from "../components/layout";
import logements from "../fixture/logements.json";
import Slides from "../components/slides";

const Housing = () => {
  return (
    <Layout>
      {logements.map((logement, index) => (
  
        <div className="contenerHousing">
          <Slides
            src={logement.pictures}
            alt={logement.title}
          />    
          <h2>{logement.title}</h2>
          <h3>{logement.location}</h3>
          <button>{logement.tags}</button>
          <button>{logement.description}</button>
          <button>{logement.equipments}</button>
        </div>
      ))}
    </Layout>
  );
};

export default Housing;
