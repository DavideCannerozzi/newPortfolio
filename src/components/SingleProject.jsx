import React from 'react'
import './SingleProject.css'
import IconsProjects from './IconsProjects'

export default function SingleProject(props){
   
   return(
   <div className="grid sm:grid-cols-2 grid-cols mt-24">
      <img  src={props.image} alt=""/>
         <div className="project-description mt-10 sm:m-0">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <IconsProjects />
         </div>
   </div>
   )
}