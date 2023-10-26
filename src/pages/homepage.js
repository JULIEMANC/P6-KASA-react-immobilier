import Layout from "../components/layout";
import Card from "../components/card";
import Banner from "../components/banner";
import logements from "../data/logements.json";

export default function homepage() {
  return (
    <Layout>
      <div className="home">
        <Banner />
        <div className="cards">
          {logements.map((logement, i) => (
            <Card Card logement={logement} key={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
