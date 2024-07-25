import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/js/Login';
import Raspadinha from './components/js/Raspadinha';
import Agradecimento from './components/js/Agradecimento';
import Premio1 from './components/js/Premio1';
import Premio2 from './components/js/Premio2';
import Premio3 from './components/js/Premio3';
import PremioFinal from './components/js/PremioFinal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/raspadinha" element={<Raspadinha />} />
        <Route path="/agradecimento" element={<Agradecimento />} />
        <Route path="/premio1" element={<Premio1 />} />
        <Route path="/premio2" element={<Premio2 />} />
        <Route path="/premio3" element={<Premio3 />} />
        <Route path="/premioFinal" element={<PremioFinal />} />
      </Routes>
    </Router>
  );
}

export default App;
