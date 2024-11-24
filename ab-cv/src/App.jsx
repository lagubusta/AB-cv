import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';
import Principal from './components/Principal/Principal';
import Contacto from './components/Contacto/Contacto';
import Experiencia from './components/Experiencia/Experiencia';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/experiencia" element={<Experiencia />} />
      </Routes>
    </Router>
  );
}

export default App;
