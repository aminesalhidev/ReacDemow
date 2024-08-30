// src/components/LoginPage.js

import React from 'react';
import '../styles/LoginPage.css'; // Importa il CSS specifico per la LoginPage

const LoginPage = () => {
  return (
    <div className="container">
      <form>
        <h1>Accedi al tuo account</h1>
        <p>Accedi al tuo account</p>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Inserisci la tua email" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Inserisci la tua password" required />
        <button type="submit">Accedi</button>
        <div className="footer-links">
          <a href="#">Hai dimenticato la password?</a>
          <a href="#">Registrati</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
