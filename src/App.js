// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/homepage';
import About from './pages/about';
import Errorpage from './pages/errorpage';
import Lodging from './pages/lodging';
import './Style/index.scss';
import'./composants/banner';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Accueil/>} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Errorpage/>} />
          <Route path ='/lodging' element={<Lodging/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
