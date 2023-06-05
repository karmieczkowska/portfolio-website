import React from 'react';
import { NavLink } from 'react-router-dom';

import "../styles/Home.css"
import HeroSection from '../components/HeroSection';
import MyPhoto from '../assets/mojeImg.jpg'

const Home = () => {
  return (
    <>
      <HeroSection />
       <div className="about-me">

        <div><img src={MyPhoto} alt="me" /></div>
        <div>
          <p>
          Organized, communicative and quick-to-learn adept at front end programming
          with a passion for both personal growth and for software development. Seeking
          an opportunity to apply my passion for coding to a talented engineering team to
          develop quality solutions. Team player with an eye for detail.
          </p>
          <NavLink to={"https://drive.google.com/file/d/1SIUUzMmrzvLAW4-JwFbKX0pLlR5IEdWF/view?usp=drive_link"} style={{color: "white"}}> My CV</NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;