import React from 'react'
import './SingleProject.css'
import IconsProjects from './IconsProjects'

export default function SingleProject(props){
   return(
      <div>
         <div className="flex project-container">
            <img className="image-project" src={props.image} alt=""/>
         <div className="project-container-content p-2">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <IconsProjects />
         </div>
            
         </div>
      </div>
   )
}