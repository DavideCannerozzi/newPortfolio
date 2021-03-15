import React from 'react'
import './SingleProject.css'
import IconsProjects from './IconsProjects'

export default function SingleProject(props){
   return(
   <div className="flex p-8">
      <img className="w-3/6" src={props.image} alt=""/>
         <div className="project-description">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <IconsProjects />
         </div>
   </div>
   )
}