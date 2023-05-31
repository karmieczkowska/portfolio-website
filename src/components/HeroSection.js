import "../styles/HeroSection.css";

import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from "../assets/backgroung-img.jpg";

function HeroSection() {
  return (
    <div className="hero">
        <div className="mask">
            <img className="hero-img"
            src={HeroImg} alt="BackgroungImage"/>
        </div>
        <div className="content">
            <h1>Hi! I'm Karolina</h1>
            <h2>React Front-end developer with passion for learning and creating</h2>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection

// import React from "react";
// import HeroSectionContenet from "../helpers/HeroSectionContent";
// import "../styles/Projects.css";

// function HeroSection () {
//   return (
//     <div className="projects">
//       <div className="projectList">
//         {ProjectList.map((project) => {
//           return (
//           <HeroSectionContenet name={project.name} image={project.image} />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


