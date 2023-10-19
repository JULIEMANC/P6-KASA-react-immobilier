import Layout from "../components/layout";
import logements from "../fixture/logements.json";
import Slides from "../components/slides";
import { useParams } from "react-router-dom";
import React, {useEffect} from "react";

const Housing = () => {
    const {id} = useParams();
    useEffect(()=>{

    }, [id])
    
  return (
    <Layout>
      {logements.map((logement, index) => (
  
        <div className="contenerHousing" key={index}>
          <Slides 
           pictures={logement.pictures}
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
