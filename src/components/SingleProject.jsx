import React from 'react'
import './SingleProject.css'
import IconsProjects from './IconsProjects'

export default function SingleProject(props){
   return(
      <div className="project-description sm:flex block mt-8">
            <div className="project-img">
                  <img src={props.image} alt={props.alt}/>
            </div>
            <div className="project-description_p mt-20 shadow-xl pt-">
                  <h3>{props.title}</h3>
                  <p>{props.content}</p>
                  <span className="inline-block mt-8 mb-10">{props.skill}</span>
                  <IconsProjects />
            </div>
      </div>
      )
}