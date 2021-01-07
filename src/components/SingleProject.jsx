import React from 'react'
import './SingleProject.css'
import IconsProjects from './IconsProjects'

export default function SingleProject(props){
   return(
      <div className="flex project-container">
         <img className="image-project" src={props.image} alt=""/>
        <div className="project-container-content mt-20 p-2">
           <h3>{props.title}</h3>
           <p className="mt-8">{props.content}</p>
         <IconsProjects />
        </div>
         
      </div>
   )
}