import Layout from "../components/layout";
import {Link } from 'react-router-dom';

const Errorpage= () => {

    return (
        <Layout>
     <div className="textError">
            <h3 className="error">404</h3>
        
            <p className="sentence">Oups!La page que vous demandez n'existe pas.</p>
            <Link className='return' to="/">Retourner sur la page d'accueil</Link>
   </div>
        </Layout>
    )
}

export default Errorpage;