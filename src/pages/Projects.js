import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";
import HeroSection2 from "../components/HeroSection2";

function Projects () {
  return (
    <div className="projects">
      <HeroSection2
        heading="PROJECTS"
        text="Some of my most recent works"
      />
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
          <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

