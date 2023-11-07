import Layout from "../components/layout";
import CollapseComponent from "../components/collapses";

const About = () => {
  return (
    <Layout>
      <div className="bannerp">
        <img
          className="picturep"
          src="/assets/images/forest.png"
          alt="forêt verte"
        />
      </div>
      <div className="thiscollapses">
        <CollapseComponent
          title="Fiabilité"
          children="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulierement vérifiées par nos équipes."
        />
        <CollapseComponent
          title="Respect"
          children="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <CollapseComponent
          title="Service"
          children="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <CollapseComponent
          title="Sécurité"
          children="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </Layout>
  );
};

export default About;
