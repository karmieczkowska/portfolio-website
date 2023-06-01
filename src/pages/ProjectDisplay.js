import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="Project"/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="video-size">
        <video src={project.video} autoPlay loop muted controls />
      </div>
      <NavLink to={project.link}><GitHubIcon /></NavLink>
    </div>
  );
}

export default ProjectDisplay;