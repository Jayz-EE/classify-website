import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Support from './pages/Support';
import NavBarTop from './components/navbartop';
import './styles/main.scss';
import Footer from './components/footer.jsx';

function App() {

  return (
    <BrowserRouter>
        <NavBarTop />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/classify-website" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Support" element={<Support />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;