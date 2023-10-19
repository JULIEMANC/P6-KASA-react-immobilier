import Layout from "../components/layout";
import CardsContains from "../components/cardsContains";
import Banner from "../components/banner";

const homepage = () => {
    return (
        <Layout>
           
            <Banner/>    
            <div class="onepage">
<CardsContains/>
            </div>
            
        </Layout>
    )
}

export default homepage ;