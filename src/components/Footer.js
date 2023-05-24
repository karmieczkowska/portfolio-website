import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <FacebookIcon />
        <LinkedInIcon />
        <GitHubIcon />
      </div>
      <p>&copy; {new Date().getFullYear()} Karolina Mieczkowska</p>
    </div>
  )
}

export default Footer