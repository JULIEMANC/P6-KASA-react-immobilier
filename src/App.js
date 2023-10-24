// import './App.css';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Accueil from './pages/homepage';
import About from './pages/about';
import Errorpage from './pages/errorpage';
import Housing from './pages/housing';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'exact element={<Accueil/>} />
          <Route path='/about'exact element={<About />} />
          <Route path='/404' exact element={<Errorpage/>} />
          <Route path='*' exact element={<Navigate to="/404" replace/>}/>
          <Route path ='/housing/:id' exact element={<Housing/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
