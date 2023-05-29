import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Home.css"

const Home = () => {
  return (
      <div className="hero-section">
        <h1>Hi, I'm Karolina!</h1>
        <h2>React Front-end developer with passion for learning and creating</h2>
        <button><Link to="/projects"> Projects </Link></button>
        <button><Link to="/contact" > Contact </Link></button>
      </div>
  );
};

export default Home;