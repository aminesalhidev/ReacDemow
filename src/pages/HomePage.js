import React from 'react';
import '../styles/HomePage.css'; // Importa il CSS per la HomePage

const HomePage = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>Benvenuto nella Home Pagina Principale di ..... :)</h1>
        <p>Benvenuto sul progetto react style.</p>
        <button>Click Me</button>
        <div className="footer-links">
          <a href="#learn-more">Learn More</a>
          <a href="#contact-us">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
