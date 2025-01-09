// src/App.jsx
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <div className="profile">
          <img src="/profile_pic.png" alt="Profile" className="profile-img" />
          <h2>Simran Bansal</h2>
          <p>Freelancer</p>
        </div>
        <div className="social-icons">
          <span>📧</span>
          <span>🔗</span>
          <span>🐙</span>
          <span>📸</span>
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Resume</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </nav>
        <button className="download-cv">Download CV</button>
      </div>
      <main className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>Here is some content about me...</p>
      </main>
    </div>
  );
};

export default App;