import React from 'react'
// import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Description  from '@mui/icons-material/Description';
import '../styles/Footer.css'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <NavLink to={"https://drive.google.com/file/d/1SIUUzMmrzvLAW4-JwFbKX0pLlR5IEdWF/view?usp=drive_link"} style={{color: "black"}}><Description /></NavLink>
        <NavLink to={"https://www.linkedin.com/in/karolina-mieczkowska/"} style={{color: "black"}}><LinkedInIcon /></NavLink>
        <NavLink to={"https://github.com/karmieczkowska"} style={{color: "black"}}><GitHubIcon /></NavLink>
      </div>
      <p>&copy; {new Date().getFullYear()} Karolina Mieczkowska</p>
    </div>
  )
}

export default Footer