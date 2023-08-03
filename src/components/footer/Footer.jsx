import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Portfolio.</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
                <a
                href="https://www.linkedin.com/in/karolina-mieczkowska/" 
                className="footer__social-link"
                target='_blank'
                rel="noopener noreferrer">
                    <i class="bx bxl-facebook"></i>
                </a>

                <a
                href="https://github.com/karmieczkowska"
                className="footer__social-link"
                target='_blank'
                rel="noopener noreferrer">
                    <i class="bx bxl-github"></i>
                </a>

                <a
                href="https://drive.google.com/file/d/1sTscM-Pf7TMKbVLlb51qw8brCQrsgQQW/view?usp=sharing" 
                className="footer__social-link"
                target='_blank'
                rel="noopener noreferrer">
                    <i class="bx bx-file-blank"></i>
                </a>
            </div>

            <span className="footer__copy">© 2023 Karolina Mieczkowska</span>
        </div>
    </footer>
  )
}

export default Footer