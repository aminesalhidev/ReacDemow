// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Importazione di HomePage
import TaskListPage from './pages/TaskListPage'; // Importazione di TaskListPage
import LoginPage from './pages/LoginPage'; // Importazione di LoginPage
import SignupPage from './pages/SignupPage'; // Importazione di SignupPage
import Header from './components/Header'; // Importazione di Header

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasks" element={<TaskListPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
