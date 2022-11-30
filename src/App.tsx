import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componentes/paginas/home/Home';
import Navbar from './componentes/estaticos/navbar/navbar';
import './App.css';
import Footer from './componentes/estaticos/footer/footer';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
