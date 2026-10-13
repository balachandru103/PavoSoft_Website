import React, { useEffect } from 'react';
import './App.css';
import DashboardPage from './Screens/Pages/DashboardPage';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from './Screens/Pages/Home';
import Services from './Screens/Pages/Services';
import About from './Screens/Pages/About';
import Portfolio from './Screens/Pages/Portfolio';
import Contact from './Screens/Pages/Contact';
import { app } from './firebase';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  useEffect(() => {
    if (app) {
      console.log("Firebase initialized:", app.name);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <DashboardPage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </DashboardPage>
    </Router>
  );
}

export default App;
