import React from 'react';
import HeroSection2 from '../components/HeroSection2';
import "../styles/About.css"

import MyPhoto from "../assets/mojeImg.png"

const About = () => {
  return (
    <div>
      <HeroSection2
        heading="About me"
        text="React Front-End developer with passion for learning and ceating"
      />
      <div className="about-me">
        <div><img src={MyPhoto} alt="me" /></div>
        <p>
        Organized, communicative and quick-to-learn adept at front end programming
        with a passion for both personal growth and for software development. Seeking
        an opportunity to apply my passion for coding to a talented engineering team to
        develop quality solutions. Team player with an eye for detail.
        </p>
      </div>
    </div>
  );
};

export default About;