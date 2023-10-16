// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/accueil';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Accueil/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
