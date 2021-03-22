import React from 'react'
import './SingleProject.css'
import IconsProjects from './IconsProjects'

export default function SingleProject(props){
   
   return(
   <div>
         <div className="project-description mt-10 sm:m-0 flex">
            <img className="w-40" src={props.image} alt=""/>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <IconsProjects />
         </div>
   </div>
   )
}