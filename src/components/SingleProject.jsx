import React from 'react'
import './SingleProject.css'
import IconsProjects from './IconsProjects'

export default function SingleProject(props){
   return(
      <div className="project-description sm:flex block mt-8">
            <div className="project-img w-full">
                  <img src={props.image} alt={props.alt}/>
            </div>
            <div className="project-description_p mt-20 w-full shadow-xl p-4">
                  <h3>{props.title}</h3>
                  <p>{props.content}</p>
                  <span className="inline-block mt-8 mb-10">{props.skill}</span>
                  <IconsProjects />
            </div>
      </div>
      )
}