import Layout from "../components/layout";
import logements from "../fixture/logements.json";
import Slides from "../components/slides";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Housing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState();
  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

  useEffect(() => {
    try {
      const logementData = logements.find((item) => item.id === id);
      console.log(logementData); 
      if (logementData.id !== id){
        return navigate("/404");
      }else{
        setLogement(logementData);
      }
    } catch (error) {
    console.error("404")  
    }
  }, [id,navigate]);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const toggleEquipments = () => {
    setShowEquipments(!showEquipments);
  }; 

  return (
    <Layout>
      <div className="contenerHousing">
        <Slides pictures={logement?.pictures} alt={logement?.title} />
        <h2 className="housingtitle">{logement?.title}</h2>
        <h3 className="locationhousing">{logement?.location}</h3>
        <button className="tags">{logement?.tags}</button>
        <p className="nameP">{logement?.host.name}</p>
        {/* <img className="owner" alt="owner">{logement?.host.picture}</img> */}
    {/* <img className="stars" alt="stars rating"src="/assets/logo/stars-active">{logement?.rating}</img> */}


<div className="buttonCollapse">
        <button className="descr" onClick={toggleDescription}>
          Description 
          <img src='/assets/logo/arrowH.png' alt='logo fleche haut 'className='arrowHight'/>
        </button>
        {showDescription && <p>{logement?.description}</p>}

        <button className="equip" onClick={toggleEquipments} >
          Equipments <img src='/assets/logo/arrowH.png' alt='logo fleche haut 'className='arrowHight'/>
        </button>

        {showEquipments && <p>{logement?.equipments}</p>}
    </div>
     </div>
    </Layout>
  );
};

export default Housing;
