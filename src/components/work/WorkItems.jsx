import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img' />
        <h3 className="work__title">{item.name}</h3>
        <div className='work__description'>
          <a href={item.demo} target="_blank" rel="noopener noreferrer" className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
          <a href={item.link} target="_blank" className="home__social-icon" rel="noopener noreferrer">
            <i class="uil uil-github-alt"></i>
          </a>
        </div>
    </div>
  )
}

export default WorkItems