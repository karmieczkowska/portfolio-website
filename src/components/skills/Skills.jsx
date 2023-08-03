import React from 'react'
import './Skills.css'
import HTML from '../../assets/html5.svg';
import CSS from '../../assets/css3.svg';
import JS from '../../assets/javascript.svg';
import TS from '../../assets/typescript.svg';
import ReactIcon from '../../assets/react.svg';
import SASS from '../../assets/sass.svg';
import GIT from '../../assets/git.svg'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">My Skills</h2>
        <span className="section__subtitle">I've worked with these technologies</span>
        <div className="skills__container container grid">
            <div className="skills__box">
                <img src={HTML} alt="" className="skills__logo" />
                <h3 className="skills__name">HTML</h3>
            </div>

            <div className="skills__box">
                <img src={CSS} alt="" className="skills__logo" />
                <h3 className="skills__name">CSS</h3>
            </div>

            <div className="skills__box">
                <img src={JS} alt="" className="skills__logo" />
                <h3 className="skills__name">JavaScript</h3>
            </div>

            <div className="skills__box">
                <img src={TS} alt="" className="skills__logo" />
                <h3 className="skills__name">TypeScript</h3>
            </div>

            <div className="skills__box">
                <img src={ReactIcon} alt="" className="skills__logo" />
                <h3 className="skills__name">React.js</h3>
            </div>

            <div className="skills__box">
                <img src={SASS} alt="" className="skills__logo" />
                <h3 className="skills__name">SASS</h3>
            </div>

            <div className="skills__box">
                <img src={GIT} alt="" className="skills__logo" />
                <h3 className="skills__name">GIT</h3>
            </div>

        </div>
    </section>
  )
}

export default Skills