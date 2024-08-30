// src/components/Header.js
import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <header>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav>
        <ul className={`menu-items ${menuOpen ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/tasks">Tasks</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Signup</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
