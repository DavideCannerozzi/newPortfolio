import React from 'react'
import './SingleProject.css'
import IconsProjects from './IconsProjects'

export default function SingleProject(props){
   
   return(
   <div>
         <div className="project-description flex">
            <div className="project-img w-2/4">
             <img src={props.image} alt={props.alt}/>
            </div>
         
         <div className="project-description_p">
               <h3>{props.title}</h3>
               <p>{props.content}</p>
               <span>{props.skill}</span>
               <IconsProjects />
         </div>
            
         </div>
   </div>
   )
}