// src/pages/SignupPage.js
import React from 'react';
import '../styles/SignupPage.css';

const SignupPage = () => {
  return (
    <div className="container">
      <form>
        <h1>Registrati Ora</h1>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Create Account</button>
      </form>
      <div className="footer-links">
        <a href="#terms">Terms of Service</a> | <a href="#privacy">Privacy Policy</a>
      </div>
    </div>
  );
}

export default SignupPage;
