import React from 'react'
// import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        {/* <FacebookIcon /> */}
        <NavLink to={"https://www.linkedin.com/in/karolina-mieczkowska/"} style={{color: "black"}}><LinkedInIcon /></NavLink>
        <NavLink to={"https://github.com/karmieczkowska"} style={{color: "black"}}><GitHubIcon /></NavLink>
      </div>
      <p>&copy; {new Date().getFullYear()} Karolina Mieczkowska</p>
    </div>
  )
}

export default Footer