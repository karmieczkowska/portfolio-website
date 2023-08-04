import React from 'react'
import './Work.css'
import Works from './Works'

const Work = () => {
  return (
    <section className="work section" id='portfolio'>
        <h1 className="section__title">Portfolio</h1>
        <span className="section__subtitle">Most recent works</span>

        <Works />
    </section>
  )
}

export default Work