import Layout from "../components/layout";
import CollapseComponent from "../components/collapses";
import Slides from "../components/slides";
import RatingStars from "../components/rating";
import logements from "../data/logements.json";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Housing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState();

  useEffect(() => {
    try {
      const logementData = logements.find((item) => item.id === id);
      if (!logementData) {
        return navigate("/404");
      } else {
        setLogement(logementData);
      }
    } catch (error) {
      console.error("404");
    }
  }, [id, navigate]);
  
  return (
    <Layout>
      <div className="contenerHousing">
      
        <Slides pictures={logement?.pictures} alt={logement?.title} />
         <div className="partInfos"> 
         <div className="infos">
          <h2 className="housingtitle">{logement?.title}</h2>
          <h3 className="locationhousing">{logement?.location}</h3>
          <ul className="tags">
            {logement?.tags.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
          </div>
          <div className="namepictures">
            <div className="profileLoc">
            <p className="nameP">{logement?.host.name}</p>
            <img className="owner" alt="owner" src={logement?.host.picture} />
           </div> 
           <RatingStars rating={logement?.rating}/>
          </div>
        </div>
        <div className="collapsesDescr">
          <CollapseComponent title="Déscription">
            <p>{logement?.description}</p>
          </CollapseComponent>
          <CollapseComponent title="Equipements">
            <ul>
             {logement?.equipments.map((equipment,i)=>(
                 <li key={i}>{equipment}</li>
              ))}
            </ul>
          </CollapseComponent>
        </div>
      </div>
    </Layout>
  );
};
export default Housing;
