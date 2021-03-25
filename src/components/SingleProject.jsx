import React from 'react'
import './SingleProject.css'
import IconsProjects from './IconsProjects'

export default function SingleProject(props){
   
   return(
   <div>
         <div className="project-description mt-10 flex">
            <div className="project-img">
             <img src={props.image} alt=""/>
            </div>
         
         <div className="project-description_p">
               <h3>{props.title}</h3>
               <p>{props.content}</p>
               <IconsProjects />
         </div>
            
         </div>
   </div>
   )
}