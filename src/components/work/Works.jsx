import React from 'react'
import { ProjectData } from './Data'
import WorkItems from './WorkItems'

const Works = () => {
  return (
        <div className="work__container container grid">
            {ProjectData.map((item) => {
                return <WorkItems item={item} key={item.id}/>
            })}
        </div>

  )
}

export default Works