import React from 'react';
import { NavLink } from 'react-router-dom';

import "../styles/Home.css"
import HeroSection from '../components/HeroSection';
import MyPhoto from '../assets/my-photo.jpg'
// import About from './About';
// import Projects from './Projects';

const Home = () => {
  return (
    <>
      <HeroSection />
    </>
  );
};

export default Home;